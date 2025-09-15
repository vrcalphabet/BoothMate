import { HTTPClient } from '@/services';
import { EndpointGenerator } from '@/services/api';
import { WebAppManifest } from 'web-app-manifest';

export class JsonFetcher {
  private client: HTTPClient;

  constructor(client: HTTPClient) {
    this.client = client;
  }

  getManifest(): Promise<WebAppManifest> {
    const manifestUrl = EndpointGenerator.json.getManifest();
    return this.client.get<WebAppManifest>(manifestUrl);
  }

  async validateToken(): Promise<boolean> {
    const wishlistNameUrl = EndpointGenerator.json.getWishlistNames();
    try {
      await this.client.head(wishlistNameUrl);
      return true;
    } catch {
      return false;
    }
  }

  autocomplete(query: string): Promise<string[]> {
    const autocompleteUrl = EndpointGenerator.json.autocomplete(query);
    return this.client.get<string[]>(autocompleteUrl);
  }
}
