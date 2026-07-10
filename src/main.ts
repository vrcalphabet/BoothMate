import { HTTPClient } from './services/common/HTTPClient'
import { ItemService } from './services/item/ItemService'
import { NotificationService } from './services/notification/NotificationService'
import { ShopService } from './services/shop/ShopService'
import { UtilsService } from './services/utils/UtilsService'
import { WishlistService } from './services/wishlist/WishlistService'

/**
 * BoothMateのインスタンス初期化用オプション
 */
export interface BoothMateOptions {
  /**
   * セッション識別用のCookie値( `_plaza_session_nktz7u` の値)。
   * アカウントの識別と認証に使用します（任意）。
   */
  sessionToken?: string
  /**
   * CSRF保護用のトークン（ `meta[name="csrf-token"]` から取得）。
   * スキリストの操作（スキ！の追加・編集・削除）に必要です（任意）。
   */
  csrfToken?: string
  /**
   * HTTPリクエストのデバッグモードの有効/無効（省略時はfalse、任意）。
   */
  debug?: boolean
}

export class BoothMate {
  private client: HTTPClient
  /** 商品の検索・取得を行うサービスクラスです。 */
  readonly item: ItemService
  /** ショップの情報を取得するサービスクラスです。 */
  readonly shop: ShopService
  /** スキリストの取得・操作を行うサービスクラスです。 */
  readonly wishlist: WishlistService
  /** ユーティリティ関数を提供するサービスクラスです。 */
  readonly utils: UtilsService
  /**
   * 通知の取得を行うサービスクラスです。
   * @experimental 実験的な機能であり、将来的に変更される可能性があります。
   */
  readonly notification: NotificationService

  /**
   * BoothMateのインスタンスを作成します。
   *
   * 認証に必要なトークンやオプションを設定してBooth.pmのAPIにアクセスできるようにします。
   *
   * @param options トークンやデバッグオプションを含む設定オブジェクト
   *
   * @example
   * ```ts
   * import 'dotenv/config';
   * import { BoothMate } from 'boothmate';
   *
   * const client = new BoothMate({
   *   sessionToken: process.env.SESSION_TOKEN!,
   *   csrfToken: process.env.CSRF_TOKEN!,
   * });
   *
   * // もしくはトークンを省略して初期化も可能です
   * // const client = new BoothMate();
   *
   * await client.item.search('VRChat');
   * ```
   */
  constructor(options: BoothMateOptions = {}) {
    this.client = new HTTPClient({
      sessionToken: options.sessionToken,
      csrfToken: options.csrfToken,
      debug: options.debug ?? false,
    })

    this.item = new ItemService(this.client)
    this.shop = new ShopService(this.client)
    this.wishlist = new WishlistService(this.client)
    this.utils = new UtilsService(this.client)
    this.notification = new NotificationService(this.client)
  }

  /**
   * トークンやオプションを更新します。
   * @param options トークンやデバッグオプションを含む設定オブジェクト
   *
   * @example
   * ```ts
   * // セッションの変更
   * client.setOptions({
   *   sessionToken: process.env.SESSION_TOKEN!,
   *   csrfToken: process.env.CSRF_TOKEN!,
   * });
   *
   * // セッションのクリア
   * client.setOptions({});
   * ```
   */
  setOptions(options: BoothMateOptions): void {
    this.client.setOptions({
      sessionToken: options.sessionToken,
      csrfToken: options.csrfToken,
      debug: options.debug ?? false,
    })
  }

  /**
   * 現在のトークンやオプションを取得します。
   * @returns 現在の設定オブジェクト
   */
  getOptions(): BoothMateOptions & { debug: boolean } {
    return this.client.getOptions()
  }
}

export * from './types'
