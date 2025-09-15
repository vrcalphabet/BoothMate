import axios, { AxiosError } from 'axios';
import chalk from 'chalk';

export class HTTPClient {
  private cookies: Record<string, string> = {};
  private csrfToken: string = '';
  private debug: boolean = false;

  constructor(config: { sessionToken: string; csrfToken: string; debug: boolean }) {
    this.cookies['_plaza_session_nktz7u'] = config.sessionToken;
    this.cookies['adult'] = 't';
    this.csrfToken = config.csrfToken;
    this.debug = config.debug;
  }

  get<T>(url: string): Promise<T> {
    return this.request<T>('GET', url);
  }

  getHtml(url: string): Promise<string> {
    return this.request('GET', url, true);
  }

  head(url: string): Promise<void> {
    return this.request('HEAD', url);
  }

  post<T>(url: string, body?: string): Promise<T> {
    return this.request<T>('POST', url, false, body);
  }

  patch<T>(url: string, body?: string): Promise<T> {
    return this.request<T>('PATCH', url, false, body);
  }

  delete<T>(url: string): Promise<T> {
    return this.request<T>('DELETE', url);
  }

  private async request<T>(
    method: string,
    url: string,
    html: boolean = false,
    body?: string,
  ): Promise<T> {
    const requestTime = performance.now();

    try {
      const response = await axios.request<T>({
        method,
        url,
        headers: {
          Cookie: this.getCookieString(),
          Accept: html ? 'text/html,*/*' : 'application/json',
          'Content-Type': html ? undefined : 'application/json',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
          'X-Csrf-Token': this.csrfToken,
        },
        withCredentials: true,
        data: body,
      });

      if (this.debug) {
        this.writeLog(method, url, response.status, requestTime);
      }

      return response.data;
    } catch (e) {
      if (this.debug && e instanceof AxiosError) {
        this.writeLog(method, url, e.status, requestTime);
      }

      throw undefined;
    }
  }

  private getCookieString(): string {
    return Object.entries(this.cookies)
      .map(([key, value]) => `${key}=${value}`)
      .join('; ');
  }

  private writeLog(
    method: string,
    url: string,
    status: number | undefined,
    requestTime: number,
  ) {
    const statusColor = {
      GET: chalk.bgGreen,
      POST: chalk.bgBlue,
      HEAD: chalk.bgGray,
      DELETE: chalk.bgRed,
      PATCH: chalk.bgYellow,
    }[method]!;

    const statusStr =
      status === undefined ? chalk.red(-1)
      : status >= 200 && status <= 299 ? chalk.green(status)
      : chalk.red(status);
    const methodStr = chalk.white(statusColor(` ${method} `));
    const timeStr = chalk.gray(`${Math.round(performance.now() - requestTime)}ms`);

    console.log(`${statusStr} ${methodStr} ${url} (${timeStr})`);
  }
}
