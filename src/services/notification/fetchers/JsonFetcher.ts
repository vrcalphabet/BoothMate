import { HTTPClient } from '@/services';
import { EndpointGenerator } from '@/api';
import { type BNotifications } from '@/types/booth-api';

export class JsonFetcher {
  private client: HTTPClient;

  constructor(client: HTTPClient) {
    this.client = client;
  }

  list(): Promise<BNotifications> {
    const notificationUrl = EndpointGenerator.json.notificationList();
    return this.client.get<BNotifications>(notificationUrl);
  }
}
