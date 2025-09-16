import { isEqual } from 'lodash';
import { JsonFetcher } from './fetchers';
import { JsonNormalizer } from './normalizers';
import { Wishlist, WishlistBasic, WishlistSummary } from '@/types';
import { HTTPClient } from '..';
import { BItemInWishlist } from '@/types/booth-api';
import { CommonJsonFetcher } from '../common';

export class WishlistService {
  private jsonFetcher: JsonFetcher;
  private commonJsonFetcher: CommonJsonFetcher;

  constructor(client: HTTPClient) {
    this.jsonFetcher = new JsonFetcher(client);
    this.commonJsonFetcher = new CommonJsonFetcher(client);
  }

  /**
   * ウィッシュリストの一覧を取得します。
   *
   * 自分が作成したウィッシュリストの名前とIDのリストを取得します。
   *
   * @returns ウィッシュリストの名前とIDのリスト
   *
   * @example
   * ```ts
   * // ウィッシュリストの名前を出力
   * const wishlists = await client.wishlist.getNames();
   * for (const wishlist of wishlists) {
   *   console.log(wishlist.name);
   * }
   * ```
   */
  async getNames(): Promise<WishlistSummary[]> {
    const wishlistNames = await this.jsonFetcher.getNames();
    return JsonNormalizer.getNames(wishlistNames);
  }

  /**
   * ウィッシュリストの内容を取得します。
   *
   * 指定されたウィッシュリストの商品一覧を取得します。
   * 自分が作成したウィッシュリストと公開されているウィッシュリストのみ取得可能です。
   *
   * @param wishlistId ウィッシュリストのID
   * @param page 取得するページ番号(デフォルト: 1)
   * @returns ウィッシュリストの内容(存在しないまたは非公開の場合はundefined)
   *
   * @example
   * ```ts
   * // ウィッシュリストの1番目の商品名を出力
   * const wishlist = await client.wishlist.getItems('my-wishlist');
   * if (wishlist) {
   *  console.log(wishlist.items[0].name);
   * }
   * ```
   */
  async getItems(wishlistId: string, page: number = 1): Promise<Wishlist | undefined> {
    const wishlistName = await this.jsonFetcher.getMetadata(wishlistId);
    if (!wishlistName) return undefined;

    const wishlist = await this.jsonFetcher.getItems(wishlistId, page);
    if (!wishlist) return undefined;

    const wishlistCounts =
      await this.commonJsonFetcher.wishlistCountsFromResult(wishlist);

    return JsonNormalizer.getItems(wishlist, wishlistName, wishlistCounts);
  }

  /**
   * デフォルトのウィッシュリストを取得します。
   *
   * ユーザーのデフォルト（すべて）のウィッシュリストの内容を取得します。
   *
   * https://accounts.booth.pm/wish_lists
   *
   * @param page 取得するページ番号(デフォルト: 1)
   * @returns デフォルトのウィッシュリストの内容
   *
   * @example
   * ```ts
   * // デフォルトのウィッシュリストの1番目の商品名を出力
   * const wishlist = await client.wishlist.getDefaultItems();
   * console.log(wishlist.items[0].name);
   * ```
   */
  async getDefaultItems(page: number = 1): Promise<WishlistBasic> {
    const wishlist = await this.jsonFetcher.getDefaultItems(page);
    const wishlistCounts =
      await this.commonJsonFetcher.wishlistCountsFromResult(wishlist);

    return JsonNormalizer.getBasic(wishlist, wishlistCounts);
  }

  /**
   * 未分類のウィッシュリストを取得します。
   *
   * 「未分類」カテゴリのウィッシュリストの内容を取得します。
   *
   * @param page 取得するページ番号(デフォルト: 1)
   * @returns 未分類のウィッシュリストの内容
   *
   * @example
   * ```ts
   * // 未分類のウィッシュリストの1番目の商品名を出力
   * const wishlist = await client.wishlist.getUncategorizedItems();
   * console.log(wishlist.items[0].name);
   * ```
   */
  async getUncategorizedItems(page: number = 1): Promise<WishlistBasic> {
    const wishlist = await this.jsonFetcher.getUncategorizedItems(page);
    const wishlistCounts =
      await this.commonJsonFetcher.wishlistCountsFromResult(wishlist);

    return JsonNormalizer.getBasic(wishlist, wishlistCounts);
  }

  /**
   * 商品のウィッシュリスト登録状況を確認します。
   *
   * 指定された商品がウィッシュリストに含まれているかを確認します。
   *
   * @param itemId 確認する商品のID
   * @param wishlistId 確認するウィッシュリストのID(省略時はデフォルトのウィッシュリスト)
   * @returns 商品がウィッシュリストに含まれている場合true、含まれていない場合false
   *
   * @example
   * ```ts
   * // 商品ID 12345 がデフォルトのウィッシュリストに含まれているか確認
   * const isInDefault = await client.wishlist.hasItem(12345);
   * if (isInDefault) {
   *   console.log('商品はデフォルトのウィッシュリストに含まれています');
   * }
   *
   * // 商品ID 12345 がウィッシュリストに含まれているか確認
   * const isInWishlist = await client.wishlist.hasItem(12345, 'pQ9TlbPV');
   * if (isInWishlist) {
   *   console.log('商品は指定されたウィッシュリストに含まれています');
   * }
   * ```
   */
  async hasItem(itemId: number, wishlistId?: string): Promise<boolean> {
    if (wishlistId === undefined) {
      const wishlistCounts = await this.commonJsonFetcher.wishlistCounts([itemId]);
      return wishlistCounts.item_ids.includes(itemId);
    } else {
      const isItemInWishlist = await this.jsonFetcher.hasItem(itemId);
      return isItemInWishlist.some(
        (wishlist) =>
          wishlist.wish_list_name_code === wishlistId &&
          wishlist.is_item_in_wish_list_name,
      );
    }
  }

  /**
   * 商品をウィッシュリストに追加します。
   *
   * 指定された商品をウィッシュリストに追加します。
   * 複数のウィッシュリストに同時に追加することも可能です。
   *
   * @param itemId 追加する商品のID
   * @param wishlistIds 追加先のウィッシュリストのID
   *                    - 省略時: デフォルトのウィッシュリストに追加
   *                    - 文字列: 指定されたウィッシュリストに追加
   *                    - 配列: 複数のウィッシュリストに追加
   *
   * @example
   * ```ts
   * // 商品ID 12345 をデフォルトのウィッシュリストに追加
   * await client.wishlist.addItem(12345);
   *
   * // 商品ID 12345 をウィッシュリストに追加
   * await client.wishlist.addItem(12345, 'pQ9TlbPV');
   *
   * // 商品ID 12345 を複数のウィッシュリストに追加
   * await client.wishlist.addItem(12345, ['pQ9TlbPV', '8OVTLANn']);
   * ```
   */
  async addItem(itemId: number, wishlistIds?: string | string[]): Promise<void> {
    const wishlistStatus = await this.jsonFetcher.hasItem(itemId);

    const currentWishlistIds = this.determineTargetWishlistIds(wishlistStatus, [], true);
    const targetWishlistIds = this.determineTargetWishlistIds(
      wishlistStatus,
      wishlistIds ?? [],
    );
    if (isEqual(currentWishlistIds, targetWishlistIds)) {
      return;
    }

    if (wishlistIds === undefined || currentWishlistIds.length === 0) {
      const addSuccess = await this.jsonFetcher.post(itemId);
      if (!addSuccess || wishlistIds === undefined) return;
    }

    await this.jsonFetcher.patch(itemId, targetWishlistIds);
  }

  /**
   * 商品をウィッシュリストから削除します。
   *
   * 指定された商品をウィッシュリストから削除します。
   * 複数のウィッシュリストから同時に削除することも可能です。
   *
   * @param itemId 削除する商品のID
   * @param wishlistIds 削除元のウィッシュリストのID
   *                    - 省略時: デフォルトのウィッシュリストから削除
   *                    - 文字列: 指定されたウィッシュリストから削除
   *                    - 配列: 複数のウィッシュリストから削除
   *
   * @example
   * ```ts
   * // 商品ID 12345 をデフォルトのウィッシュリストから削除
   * await client.wishlist.removeItem(12345);
   *
   * // 商品ID 12345 をウィッシュリストから削除
   * await client.wishlist.removeItem(12345, 'pQ9TlbPV');
   *
   * // 商品ID 12345 を複数のウィッシュリストから削除
   * await client.wishlist.removeItem(12345, ['pQ9TlbPV', '8OVTLANn']);
   * ```npm
   */
  async removeItem(itemId: number, wishlistIds?: string | string[]): Promise<void> {
    if (wishlistIds === undefined) {
      await this.jsonFetcher.delete(itemId);
      return;
    }

    const wishlistStatus = await this.jsonFetcher.hasItem(itemId);

    const currentWishlistIds = this.determineTargetWishlistIds(wishlistStatus, [], true);
    const targetWishlistIds = this.determineTargetWishlistIds(
      wishlistStatus,
      wishlistIds,
      true,
    );
    if (isEqual(currentWishlistIds, targetWishlistIds)) {
      return;
    }

    await this.jsonFetcher.patch(itemId, targetWishlistIds);
  }

  private determineTargetWishlistIds(
    currentStatus: BItemInWishlist[],
    requestedIds: string | string[],
    remove: boolean = false,
  ): string[] {
    const requestedIdsArray = Array.isArray(requestedIds) ? requestedIds : [requestedIds];
    return currentStatus
      .filter((wishlist) => {
        if (remove) {
          return (
            wishlist.is_item_in_wish_list_name &&
            !requestedIdsArray.includes(wishlist.wish_list_name_code)
          );
        } else {
          return (
            wishlist.is_item_in_wish_list_name ||
            requestedIdsArray.includes(wishlist.wish_list_name_code)
          );
        }
      })
      .map((wishlist) => wishlist.wish_list_name_code);
  }
}
