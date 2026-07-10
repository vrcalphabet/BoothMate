import { JsonEndpointGenerator } from '@/api/JsonEndpointGenerator'
import { AuthError } from '@/errors'
import { HTTPClient } from '@/services/common/HTTPClient'

export class JsonFetcher {
  private client: HTTPClient

  constructor(client: HTTPClient) {
    this.client = client
  }

  async validateToken(): Promise<boolean> {
    const wishlistNameUrl = JsonEndpointGenerator.getWishlistNames()
    try {
      await this.client.head(wishlistNameUrl)
      return true
    } catch (e) {
      if (e instanceof AuthError) {
        throw e
      }

      return false
    }
  }

  autocomplete(query: string): Promise<string[]> {
    const autocompleteUrl = JsonEndpointGenerator.autocomplete(query)
    return this.client.get<string[]>(autocompleteUrl)
  }
}
