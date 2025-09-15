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
   * ファイルサイズを人間に読みやすい形式に変換します(例: 1536 -> "1.5 KB")。
   *
   * @param fileBytes ファイルサイズ(バイト単位)
   * @param decimalPlaces 小数点以下の桁数 (デフォルトは2)
   * @returns 変換されたファイルサイズの文字列
   */
  formatFileSize(fileBytes: number, decimalPlaces: number = 2): string {
    return FileSizeConverter.fromBytes(fileBytes, decimalPlaces);
  }
}
