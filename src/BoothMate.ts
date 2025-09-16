import {
  ShopService,
  UtilsService,
  NotficationService,
  WishlistService,
  ItemService,
  HTTPClient,
} from './services';

export class BoothMate {
  private client: HTTPClient;
  /** 商品の検索・取得を行うサービスクラスです。 */
  readonly item: ItemService;
  /** ショップの情報を取得するサービスクラスです。 */
  readonly shop: ShopService;
  /** スキリストの取得・操作を行うサービスクラスです。 */
  readonly wishlist: WishlistService;
  /** ユーティリティ関数を提供するサービスクラスです。 */
  readonly utils: UtilsService;
  /**
   * 通知の取得を行うサービスクラスです。
   * @experimental 実験的な機能であり、将来的に変更される可能性があります。
   */
  readonly notification: NotficationService;

  /**
   * BoothMateのインスタンスを作成します。
   *
   * 認証に必要なトークンを設定してBooth.pmのAPIにアクセスできるようにします。
   *
   * @param sessionToken セッション認証用のCookie値(`_plaza_session_nktz7u`の値)
   * @param csrfToken CSRF保護用のトークン(`meta[name="csrf-token"]`から取得)
   * @param debug デバッグモードの有効/無効(デフォルト: false)
   *
   * @example
   * ```ts
   * import 'dotenv/config';
   * import { BoothMate } from 'boothmate';
   *
   * const client = new BoothMate(
   *   process.env.SESSION_TOKEN!,
   *   process.env.CSRF_TOKEN!
   * );
   *
   * await client.item.search('VRChat');
   * ```
   */
  constructor(sessionToken: string, csrfToken: string, debug = false) {
    this.client = new HTTPClient({
      sessionToken,
      csrfToken,
      debug,
    });

    this.item = new ItemService(this.client);
    this.shop = new ShopService(this.client);
    this.wishlist = new WishlistService(this.client);
    this.utils = new UtilsService(this.client);
    this.notification = new NotficationService(this.client);
  }
}

export * from './types';
