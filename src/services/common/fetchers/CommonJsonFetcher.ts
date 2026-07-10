import { JsonEndpointGenerator } from '@/api/JsonEndpointGenerator'
import { HTTPClient } from '@/services/common/HTTPClient'
import { type BWishlistCounts } from '@/types/internal/booth-api'

export class CommonJsonFetcher {
  private client: HTTPClient

  constructor(client: HTTPClient) {
    this.client = client
  }

  wishlistCountsFromResult(result: {
    items: { id: number | string }[]
  }): Promise<BWishlistCounts> {
    return this.wishlistCounts(result.items.map((item) => item.id))
  }

  async wishlistCounts(ids: (number | string)[]): Promise<BWishlistCounts> {
    if (ids.length === 0) {
      return {
        item_ids: [],
        wishlists_counts: {},
      }
    }

    const wishlistUrl = JsonEndpointGenerator.wishlistCounts(
      ids.map((item) => String(item)),
    )
    return this.client.get<BWishlistCounts>(wishlistUrl)
  }
}
