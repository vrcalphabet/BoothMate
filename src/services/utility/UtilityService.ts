import { WebAppManifest } from 'web-app-manifest';
import { JsonFetcher } from './fetchers';
import { HTTPClient } from '..';
import { FileSizeConverter } from '../utils';

export class UtilityService {
  private jsonFetcher: JsonFetcher;

  constructor(client: HTTPClient) {
    this.jsonFetcher = new JsonFetcher(client);
  }

  /**
   * Webアプリマニフェストを取得します。
   *
   * BoothのWebアプリマニフェスト(manifest.json) の内容を取得します。
   *
   * @returns Webアプリマニフェストの内容
   *
   * @example
   * ```ts
   * // アプリの名前を出力
   * const manifest = await client.utility.getManifest();
   * console.log(manifest.name);
   * ```
   */
  getManifest(): Promise<WebAppManifest> {
    return this.jsonFetcher.getManifest();
  }

  /**
   * セッショントークンの有効性を検証します。
   *
   * 現在設定されているセッショントークンが有効かどうかを確認します。
   * ログイン状態の確認に使用できます。
   *
   * **注意:** CSRFトークンは検証しません。CSRFトークンが必要なリクエストは
   * 副作用(追加/変更/削除) を伴う可能性があるためです。
   *
   * @returns ログイン済みの場合true、未ログインの場合false
   *
   * @example
   * ```ts
   * // ログイン状態を確認
   * const isLoggedIn = await client.utility.validateToken();
   * if (isLoggedIn) {
   *   console.log('ログイン済みです');
   * }
   * ```
   */
  async validateToken(): Promise<boolean> {
    return await this.jsonFetcher.validateToken();
  }

  /**
   * 検索クエリの候補を取得します。
   *
   * 入力された検索クエリに基づいて、Boothが提案する検索候補を取得します。
   * オートコンプリート機能の実装に使用できます。
   *
   * @param query 検索クエリ(部分的な文字列でも可)
   * @returns 検索候補の文字列配列
   *
   * @example
   * ```ts
   * // "art" に対する検索候補を取得
   * const suggestions = await client.utility.autocomplete('art');
   * for (const suggestion of suggestions) {
   *   console.log(suggestion);
   * }
   * ```
   */
  autocomplete(query: string): Promise<string[]> {
    return this.jsonFetcher.autocomplete(query);
  }

  /**
   * URLから商品IDを抽出します。
   *
   * Boothの商品URLから商品IDを抽出します。
   *
   * **対応するURL形式:**
   * - `https://booth.pm/{言語ID}/items/{ID}`
   * - `https://{サブドメイン}.booth.pm/items/{ID}`
   *
   * @param url 商品のURL
   * @returns 商品ID(URLが無効な場合はundefined)
   *
   * @example
   * ```ts
   * // 商品URLから商品IDを抽出
   * const itemId = client.utility.extractItemId('https://example.booth.pm/items/12345');
   * if (itemId) {
   *   console.log(`商品ID: ${itemId}`); // 商品ID: 12345
   * }
   * ```
   */
  extractItemId(url: string): number | undefined {
    const urlPatterns = [
      /^https:\/\/booth\.pm\/[a-z-]+\/items\/(\d+)/,
      /^https:\/\/[a-z0-9-]+\.booth\.pm\/items\/(\d+)/i,
    ];

    for (const pattern of urlPatterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return Number(match[1]);
      }
    }

    return undefined;
  }

  /**
   * URLからサブドメインを抽出します。
   *
   * BoothのショップURLからショップのサブドメインを抽出します。
   *
   * **対応するURL形式:**
   * - `https://{サブドメイン}.booth.pm/`
   *
   * @param url ショップのURL
   * @returns ショップID(URLが無効な場合はundefined)
   *
   * @example
   * ```ts
   * // ショップURLからサブドメインを抽出
   * const subdomain = client.utility.extractSubdomain('https://example.booth.pm/');
   * if (subdomain) {
   *   console.log(`サブドメイン: ${subdomain}`); // サブドメイン: example
   * }
   * ```
   */
  extractSubdomain(url: string): string | undefined {
    const urlPattern = /^https:\/\/([a-z0-9-]+)\.booth\.pm/i;

    const match = url.match(urlPattern);
    if (match && match[1]) {
      return match[1];
    }

    return undefined;
  }

  /**
   * URLからウィッシュリストIDを抽出します。
   *
   * BoothのウィッシュリストURLからウィッシュリストIDを抽出します。
   *
   * **対応するURL形式:**
   * - `https://accounts.booth.pm/wish_lists/{ID}`
   * - `https://booth.pm/wish_list_names/{ID}`
   *
   * @param url ウィッシュリストのURL
   * @returns ウィッシュリストID(URLが無効な場合はundefined)
   *
   * @example
   * ```ts
   * // ウィッシュリストURLからウィッシュリストIDを抽出
   * const wishlistId = client.utility.extractWishlistId('https://accounts.booth.pm/wish_lists/pQ9TlbPV');
   * if (wishlistId) {
   *   console.log(`ウィッシュリストID: ${wishlistId}`); // ウィッシュリストID: pQ9TlbPV
   * }
   * ```
   */
  extractWishlistId(url: string): string | undefined {
    const urlPatterns = [
      /^https:\/\/accounts\.booth\.pm\/wish_lists\/([a-z0-9]{8})/i,
      /^https:\/\/booth\.pm\/wish_list_names\/([a-z0-9]{8})/i,
    ];

    for (const pattern of urlPatterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }

    return undefined;
  }

  /**
   * URLからサブドメインと商品リストIDを抽出します。
   *
   * Boothの商品リストURLからサブドメインと商品リストIDを抽出します。
   *
   * **対応するURL形式:**
   * - `https://{サブドメイン}.booth.pm/item_lists/{ID}`
   *
   * @param url 商品リストのURL
   * @returns [サブドメイン, 商品リストID] (URLが無効な場合はundefined)
   *
   * @example
   * ```ts
   * // 商品リストURLからサブドメインと商品リストIDを抽出
   * const result = client.utility.extractItemListId('https://example.booth.pm/item_lists/8OVTLANn');
   * if (result) {
   *   const [subdomain, itemListId] = result;
   *   console.log(`サブドメイン: ${subdomain}`); // サブドメイン: example
   *   console.log(`商品リストID: ${itemListId}`); // 商品リストID: 8OVTLANn
   * }
   * ```
   */
  extractItemListId(url: string): [subdomain: string, itemListId: string] | undefined {
    const urlPattern = /^https:\/\/([a-z0-9-]+)\.booth\.pm\/item_lists\/([a-z0-9]{8})/i;

    const match = url.match(urlPattern);
    if (match && match[1] && match[2]) {
      return [match[1], match[2]];
    }

    return undefined;
  }

  /**
   * ファイルサイズを人間に読みやすい形式に変換します(例: 1500 -> "1.47 KB")。
   *
   * @param fileBytes ファイルサイズ(バイト単位)
   * @param decimalPlaces 小数点以下の桁数 (デフォルトは2)
   * @returns 変換されたファイルサイズの文字列
   *
   * @example
   * ```ts
   * // 1500バイトを人間に読みやすい形式に変換
   * const readableSize = client.utility.formatFileSize(1500);
   * console.log(readableSize); // "1.47 KB"
   * ```
   */
  formatFileSize(fileBytes: number, decimalPlaces: number = 2): string {
    return FileSizeConverter.fromBytes(fileBytes, decimalPlaces);
  }
}
