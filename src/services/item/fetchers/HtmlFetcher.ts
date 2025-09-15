import { HTTPClient } from '@/services';
import { EndpointGenerator } from '@/services/api';
import { NSearchFilter } from '@/types/normalized';

export class HtmlFetcher {
  private client: HTTPClient;

  constructor(client: HTTPClient) {
    this.client = client;
  }

  search(filter: NSearchFilter): Promise<string> {
    const searchURL = EndpointGenerator.html.search(filter);
    return this.client.getHtml(searchURL);
  }

  async get(itemId: number): Promise<string | undefined> {
    const itemURL = EndpointGenerator.html.getItem(itemId);
    if (!itemURL) return undefined;

    return this.client.getHtml(itemURL);
  }
}
