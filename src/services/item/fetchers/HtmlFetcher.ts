import { HtmlEndpointGenerator } from '@/api/HtmlEndpointGenerator'
import { HTTPClient } from '@/services/common/HTTPClient'
import { type NSearchFilter } from '@/types/internal/normalized'

export class HtmlFetcher {
  private client: HTTPClient

  constructor(client: HTTPClient) {
    this.client = client
  }

  search(filter: NSearchFilter): Promise<string> {
    const searchURL = HtmlEndpointGenerator.search(filter)
    return this.client.getHtml(searchURL)
  }

  async get(itemId: number): Promise<string | undefined> {
    const itemURL = HtmlEndpointGenerator.getItem(itemId)
    if (!itemURL) return undefined

    return this.client.getHtml(itemURL)
  }
}
