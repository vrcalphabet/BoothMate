import { Item, ItemWithContents, SearchFilter, SearchResult } from '@/types';
import { SearchFilterNormalizer } from '../utils';
import { HtmlFetcher, JsonFetcher } from './fetchers';
import { HTTPClient } from '..';
import { HtmlExtractor } from './extractors';
import { HtmlNormalizer, JsonNormalizer } from './normalizers';
import { CommonJsonFetcher } from '../common';

export class ItemService {
  private htmlFetcher: HtmlFetcher;
  private jsonFetcher: JsonFetcher;
  private commonJsonFetcher: CommonJsonFetcher;

  constructor(client: HTTPClient) {
    this.htmlFetcher = new HtmlFetcher(client);
    this.jsonFetcher = new JsonFetcher(client);
    this.commonJsonFetcher = new CommonJsonFetcher(client);
  }

  /**
   * 商品を検索します。
   *
   * キーワードと検索条件を指定して商品を検索できます。
   * 条件を省略すると全ての商品一覧を取得できます。
   *
   * @param query 検索キーワード
   * @param filter 検索条件(カテゴリ、価格範囲など)
   * @returns 検索結果(商品リストとページネーション情報を含む)
   */
  async search(query: string, filter?: SearchFilter): Promise<SearchResult>;
  /**
   * 商品を検索します。
   *
   * 検索条件のみを指定して商品を検索できます。
   * 条件を省略すると全ての商品一覧を取得できます。
   *
   * @param filter 検索条件(カテゴリ、価格範囲など)
   * @returns 検索結果(商品リストとページネーション情報を含む)
   */
  async search(filter?: SearchFilter): Promise<SearchResult>;
  async search(
    query_or_filter?: string | SearchFilter,
    filter?: SearchFilter,
  ): Promise<SearchResult> {
    const nFilter =
      typeof query_or_filter === 'string' ?
        SearchFilterNormalizer.normalize(query_or_filter, filter ?? {})
      : SearchFilterNormalizer.normalize('', query_or_filter ?? {});

    const searchHtml = await this.htmlFetcher.search(nFilter);

    const extractedSearch = HtmlExtractor.search(searchHtml, nFilter.page);
    const wishlistCounts =
      await this.commonJsonFetcher.wishlistCountsFromResult(extractedSearch);
    const normalizedSearch = HtmlNormalizer.search(extractedSearch, wishlistCounts);

    return normalizedSearch;
  }

  /**
   * 商品の存在確認を行います。
   *
   * 指定されたIDの商品が存在するかを確認します。
   *
   * @param itemId 確認する商品のID
   * @returns 商品が存在する場合true、存在しない場合false
   */
  exists(itemId: number): Promise<boolean> {
    return this.jsonFetcher.exists(itemId);
  }

  /**
   * 商品の詳細情報を取得します。コンテンツ情報も含めることができます。
   *
   * @param itemId 取得する商品のID
   * @param includeContents コンテンツ情報を含めるかどうか(デフォルト: false)
   *                      - true: 段落の内容とイベント名も含める
   *                      - false: 基本情報のみ取得
   *                      ※trueにすると追加のHTTPリクエストが発生します
   * @returns 商品の詳細情報(存在しない場合はundefined)
   */
  async get(itemId: number, includeContents?: false): Promise<Item | undefined>;
  async get(
    itemId: number,
    includeContents?: true,
  ): Promise<ItemWithContents | undefined>;
  async get(
    itemId: number,
    includeContents: boolean = false,
  ): Promise<Item | ItemWithContents | undefined> {
    const item = await this.jsonFetcher.get(itemId);
    if (!item) return undefined;

    const normalizedItem = JsonNormalizer.get(item);
    if (!includeContents) return normalizedItem;

    const itemHtml = await this.htmlFetcher.get(itemId);
    if (!itemHtml) return undefined;

    const extractedItem = HtmlExtractor.get(itemHtml);
    const normalizedItemWithContents = HtmlNormalizer.get(normalizedItem, extractedItem);

    return normalizedItemWithContents;
  }
}
