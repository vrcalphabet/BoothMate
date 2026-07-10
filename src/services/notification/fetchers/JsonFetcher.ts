import { JsonEndpointGenerator } from '@/api/JsonEndpointGenerator'
import { HTTPClient } from '@/services/common/HTTPClient'
import { type BNotifications } from '@/types/internal/booth-api'

export class JsonFetcher {
  private client: HTTPClient

  constructor(client: HTTPClient) {
    this.client = client
  }

  list(): Promise<BNotifications> {
    const notificationUrl = JsonEndpointGenerator.notificationList()
    return this.client.get<BNotifications>(notificationUrl)
  }
}
