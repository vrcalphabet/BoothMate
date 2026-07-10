import { AuthError } from '@/errors'
import { type EndpointUrlSpec } from '@/types/internal'
import axios, { AxiosError } from 'axios'
import chalk from 'chalk'

interface HTTPClientOptions {
  sessionToken?: string
  csrfToken?: string
  debug: boolean
}

export class HTTPClient {
  private cookies: Record<string, string> = {}
  private sessionToken?: string
  private csrfToken?: string
  private debug: boolean = false

  constructor(options: HTTPClientOptions) {
    this.setOptions(options)
  }

  setOptions(options: HTTPClientOptions): void {
    if (options.sessionToken) {
      this.sessionToken = options.sessionToken
      this.cookies['_plaza_session_nktz7u'] = options.sessionToken
    } else {
      this.sessionToken = undefined
      delete this.cookies['_plaza_session_nktz7u']
    }

    if (options.csrfToken) {
      this.csrfToken = options.csrfToken
    } else {
      this.csrfToken = undefined
    }

    this.debug = options.debug
  }

  getOptions(): HTTPClientOptions {
    return {
      sessionToken: this.sessionToken,
      csrfToken: this.csrfToken,
      debug: this.debug,
    }
  }

  private ensureTokens({ requiresSession, requiresCsrf }: EndpointUrlSpec): void {
    const hasSession = !!this.sessionToken
    const hasCsrf = !!this.csrfToken

    if (requiresSession && requiresCsrf && !hasSession && !hasCsrf) {
      throw new AuthError(
        'リクエストを実行するにはセッショントークンとCSRFトークンの両方が必要ですが、どちらも指定されていません。',
      )
    }
    if (requiresSession && !hasSession) {
      throw new AuthError(
        'リクエストを実行するにはセッショントークンが必要ですが、指定されていません。',
      )
    }
    if (requiresCsrf && !hasCsrf) {
      throw new AuthError(
        'リクエストを実行するにはCSRFトークンが必要ですが、指定されていません。',
      )
    }
  }

  get<T = void>(spec: EndpointUrlSpec): Promise<T> {
    this.ensureTokens(spec)
    return this.request<T>('GET', spec.url)
  }

  getHtml(spec: EndpointUrlSpec): Promise<string> {
    this.ensureTokens(spec)
    return this.request('GET', spec.url, true)
  }

  head(spec: EndpointUrlSpec): Promise<void> {
    this.ensureTokens(spec)
    return this.request('HEAD', spec.url)
  }

  post<T = void>(spec: EndpointUrlSpec, body?: string): Promise<T> {
    this.ensureTokens(spec)
    return this.request<T>('POST', spec.url, false, body)
  }

  patch<T = void>(spec: EndpointUrlSpec, body?: string): Promise<T> {
    this.ensureTokens(spec)
    return this.request<T>('PATCH', spec.url, false, body)
  }

  delete<T = void>(spec: EndpointUrlSpec): Promise<T> {
    this.ensureTokens(spec)
    return this.request<T>('DELETE', spec.url)
  }

  private async request<T>(
    method: string,
    url: string,
    html: boolean = false,
    body?: string,
  ): Promise<T> {
    const requestTime = performance.now()

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
      })

      if (this.debug) {
        this.writeLog(method, url, response.status, requestTime)
      }

      return response.data
    } catch (e) {
      if (this.debug && e instanceof AxiosError) {
        this.writeLog(method, url, e.status, requestTime)
      }

      throw undefined
    }
  }

  private getCookieString(): string {
    return Object.entries(this.cookies)
      .map(([key, value]) => `${key}=${value}`)
      .join('; ')
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
    }[method]!

    const statusStr =
      status === undefined ? chalk.red(-1)
      : status >= 200 && status <= 299 ? chalk.green(status)
      : chalk.red(status)
    const methodStr = chalk.white(statusColor(` ${method} `))
    const timeStr = chalk.gray(`${Math.round(performance.now() - requestTime)}ms`)

    console.log(`${statusStr} ${methodStr} ${url} (${timeStr})`)
  }
}
