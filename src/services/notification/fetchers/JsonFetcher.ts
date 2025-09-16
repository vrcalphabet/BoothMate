import { HTTPClient } from '@/services';
import { EndpointGenerator } from '@/api';
import { Notification } from '@/types';
import { BNotifications } from '@/types/booth-api';

export class JsonFetcher {
  private client: HTTPClient;

  constructor(client: HTTPClient) {
    this.client = client;
  }

  list(): Promise<BNotifications> {
    const notificationUrl = EndpointGenerator.json.notficationList();
    return this.client.get<BNotifications>(notificationUrl);
  }
}
