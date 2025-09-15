import { HTTPClient } from '@/services';
import { EndpointGenerator } from '@/services/api';
import { BItem } from '@/types/boothApi';

export class JsonFetcher {
  private client: HTTPClient;

  constructor(client: HTTPClient) {
    this.client = client;
  }

  async get(itemId: number): Promise<BItem | undefined> {
    const itemUrl = EndpointGenerator.json.getItem(itemId);
    if (!itemUrl) return undefined;

    try {
      return await this.client.get<BItem>(itemUrl);
    } catch {
      return undefined;
    }
  }

  async exists(itemId: number): Promise<boolean> {
    const itemUrl = EndpointGenerator.json.getItem(itemId);
    if (!itemUrl) return false;

    try {
      await this.client.head(itemUrl);
      return true;
    } catch {
      return false;
    }
  }
}
