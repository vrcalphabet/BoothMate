import { Notifications } from '@/types';
import { JsonFetcher } from './fetchers';
import { HTTPClient } from '..';
import { JsonNormalizer } from './normalizers';

export class NotficationService {
  private jsonFetcher: JsonFetcher;

  constructor(client: HTTPClient) {
    this.jsonFetcher = new JsonFetcher(client);
  }

  /**
   * 通知を取得します。
   *
   * 最新10件の通知を取得します。
   *
   * @returns 通知の配列
   */
  async list(): Promise<Notifications> {
    const notifications = await this.jsonFetcher.list();
    return JsonNormalizer.list(notifications);
  }

  /**
   * 未読の通知数を取得します。
   *
   * @returns 未読の通知数
   */
  async getUnreadCount(): Promise<number> {
    const notifications = await this.jsonFetcher.list();

    return notifications.unread.length;
  }
}
