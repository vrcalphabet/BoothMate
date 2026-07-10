import { HtmlEndpointGenerator } from '@/api/HtmlEndpointGenerator'
import { HTTPClient } from '@/services/common/HTTPClient'

export class HtmlFetcher {
  private client: HTTPClient

  constructor(client: HTTPClient) {
    this.client = client
  }

  async getItems(subdomain: string, page: number): Promise<string | undefined> {
    const shopUrl = HtmlEndpointGenerator.getShopItems(subdomain, page)
    if (!shopUrl) return undefined

    try {
      return await this.client.getHtml(shopUrl)
    } catch {
      return undefined
    }
  }

  async getItemList(
    subdomain: string,
    itemListId: string,
    page: number,
  ): Promise<string | undefined> {
    const itemListUrl = HtmlEndpointGenerator.getShopItemListItems(
      subdomain,
      itemListId,
      page,
    )
    if (!itemListUrl) return undefined

    try {
      return await this.client.getHtml(itemListUrl)
    } catch {
      return undefined
    }
  }
}
