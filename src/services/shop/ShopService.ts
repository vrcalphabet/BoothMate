import { ItemList, Shop, ShopItems } from '@/types';
import { HTTPClient } from '..';
import { HtmlFetcher } from './fetchers';
import { HtmlExtractor } from './extractors';
import { HtmlNormalizer } from './normalizers';
import { CommonJsonFetcher } from '../common';

export class ShopService {
  private htmlFetcher: HtmlFetcher;
  private commonJsonFetcher: CommonJsonFetcher;

  constructor(client: HTTPClient) {
    this.htmlFetcher = new HtmlFetcher(client);
    this.commonJsonFetcher = new CommonJsonFetcher(client);
  }

  /**
   * ショップ情報を取得します。
   *
   * 指定されたサブドメインのショップの基本情報を取得します。
   *
   * @param subdomain ショップのサブドメイン
   *                 例: `https://example.booth.pm` → `example`
   * @returns ショップ情報(存在しない場合はundefined)
   *
   * @example
   * ```ts
   * // ショップの説明文を出力
   * const shop = await client.shop.get('alphahub');
   * if (shop) {
   *   console.log(shop.description);
   * }
   * ```
   */
  async get(subdomain: string): Promise<Shop | undefined> {
    const shopHtml = await this.htmlFetcher.getItems(subdomain, 1);
    if (!shopHtml) return undefined;

    const extractedShop = HtmlExtractor.get(shopHtml, subdomain);
    const normalizedShop = HtmlNormalizer.get(extractedShop);

    return normalizedShop;
  }

  /**
   * ショップの商品一覧を新着順で取得します。
   *
   * 指定されたショップで販売されている商品の一覧をページ単位で取得します。
   *
   * @param subdomain ショップのサブドメイン
   *                 例: `https://example.booth.pm` → `example`
   * @param page 取得するページ番号(デフォルト: 1)
   * @returns ショップの商品一覧(ショップが存在しない場合はundefined)
   *
   * @example
   * ```ts
   * // ショップの最新の商品の商品名を出力
   * const shopItems = await client.shop.getItems('alphahub');
   * if (shopItems) {
   *   console.log(shopItems.items[0].name);
   * }
   * ```
   */
  async getItems(subdomain: string, page: number = 1): Promise<ShopItems | undefined> {
    const shopItemsHtml = await this.htmlFetcher.getItems(subdomain, page);
    if (!shopItemsHtml) return undefined;

    const extractedShopItems = HtmlExtractor.getItems(shopItemsHtml, page);
    const wishlistCounts =
      await this.commonJsonFetcher.wishlistCountsFromResult(extractedShopItems);
    const normalizedShopItems = HtmlNormalizer.getItems(
      extractedShopItems,
      wishlistCounts,
    );

    return normalizedShopItems;
  }

  /**
   * ショップの商品リストを新着順で取得します。
   *
   * ショップが作成した特定の商品リスト(カテゴリ別商品一覧など) を取得します。
   *
   * @param subdomain ショップのサブドメイン
   *                 例: `https://example.booth.pm` → `example`
   * @param itemListId 商品リストのID
   *                  例: `https://example.booth.pm/item_lists/8OVTLANn` → `8OVTLANn`
   * @param page 取得するページ番号(デフォルト: 1)
   * @returns 商品リスト(商品リストが存在しない場合はundefined)
   *
   * @example
   * ```ts
   * // 商品リストの最新商品の商品名を出力
   * const itemList = await client.shop.getItemList('mukumi', '8OVTLANn');
   * if (itemList) {
   *   console.log(itemList.items[0].name);
   * }
   * ```
   */
  async getItemList(
    subdomain: string,
    itemListId: string,
    page: number = 1,
  ): Promise<ItemList | undefined> {
    const itemListHtml = await this.htmlFetcher.getItemList(subdomain, itemListId, page);
    if (!itemListHtml) return undefined;

    const extractedItemList = HtmlExtractor.getItemList(
      itemListHtml,
      subdomain,
      itemListId,
      page,
    );
    const wishlistCounts =
      await this.commonJsonFetcher.wishlistCountsFromResult(extractedItemList);
    const normalizedItemList = HtmlNormalizer.getItemList(
      extractedItemList,
      wishlistCounts,
    );

    return normalizedItemList;
  }
}
