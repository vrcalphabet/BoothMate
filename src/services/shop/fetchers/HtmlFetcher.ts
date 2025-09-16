import { HTTPClient } from '@/services';
import { EndpointGenerator } from '@/api';

export class HtmlFetcher {
  private client: HTTPClient;

  constructor(client: HTTPClient) {
    this.client = client;
  }

  async getItems(subdomain: string, page: number): Promise<string | undefined> {
    const shopUrl = EndpointGenerator.html.getShopItems(subdomain, page);
    if (!shopUrl) return undefined;

    try {
      return await this.client.getHtml(shopUrl);
    } catch {
      return undefined;
    }
  }

  async getItemList(
    subdomain: string,
    itemListId: string,
    page: number,
  ): Promise<string | undefined> {
    const itemListUrl = EndpointGenerator.html.getShopItemListItems(
      subdomain,
      itemListId,
      page,
    );
    if (!itemListUrl) return undefined;

    try {
      return await this.client.getHtml(itemListUrl);
    } catch {
      return undefined;
    }
  }
}
