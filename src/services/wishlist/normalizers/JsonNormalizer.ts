import { CommonHtmlNormalizer, CommonJsonNormalizer } from '@/services/common';
import { CategoryConverter } from '@/utils';
import {
  BoothEvent,
  ItemSummary,
  Wishlist,
  WishlistBasic,
  WishlistSummary,
} from '@/types';
import {
  BItemSummary,
  BWishlist,
  BWishlistCounts,
  BWishlistMetadata,
  BWishlistName,
} from '@/types/booth-api';

export class JsonNormalizer {
  static WISHLIST_ITEM_LIMIT = 2000;

  private constructor() {}

  static getNames(wishlistNames: BWishlistName[]): WishlistSummary[] {
    return wishlistNames.map<WishlistSummary>((wishlist) => ({
      id: wishlist.code,
      name: wishlist.name,
      url: `https://accounts.booth.pm/wish_lists/${wishlist.code}`,
      public_url: `https://booth.pm/wish_list_names/${wishlist.code}`,
    }));
  }

  static getItems(
    wishlist: BWishlist,
    wishlistNameDetail: BWishlistMetadata,
    wishlistCounts: BWishlistCounts,
  ): Wishlist {
    return {
      id: wishlistNameDetail.code,
      name: wishlistNameDetail.name,
      url: `https://accounts.booth.pm/wish_lists/${wishlistNameDetail.code}`,
      public_url: wishlistNameDetail.public_url,
      current_page: wishlist.pagination.current_page,
      total_pages: wishlist.pagination.total_pages,
      total_items: wishlist.pagination.total_count,
      remaining_items: this.WISHLIST_ITEM_LIMIT - wishlist.pagination.total_count,
      visible: wishlistNameDetail.visible,
      description: wishlistNameDetail.description,
      items: this.get_items(wishlist.items, wishlistCounts),
    };
  }

  static getBasic(wishlist: BWishlist, wishlistCounts: BWishlistCounts): WishlistBasic {
    return {
      current_page: wishlist.pagination.current_page,
      total_pages: wishlist.pagination.total_pages,
      total_items: wishlist.pagination.total_count,
      items: this.get_items(wishlist.items, wishlistCounts),
    };
  }

  private static get_items(
    items: BItemSummary[],
    wishlistCounts: BWishlistCounts,
  ): ItemSummary[] {
    return items.map<ItemSummary>((item) => {
      return {
        id: item.id,
        url: item.url,
        name: item.name,
        thumbnails: CommonHtmlNormalizer.thumbnails(item.thumbnail_image_urls),
        category: CategoryConverter.fromSubCategory(item.category.name.ja)!,
        subcategory: item.category.name.ja,
        is_vrchat: item.is_vrchat,
        is_adult: item.is_adult,
        min_price: item.tracking_data.product_price,
        has_variations: item.price.includes('~'),
        wishlist_count: wishlistCounts.wishlists_counts[item.id],
        wished: wishlistCounts.item_ids.includes(item.id),
        event:
          item.event ?
            {
              id: item.event.url.match(/\/events\/([\w-]+)/)![1] as BoothEvent,
              name: item.event.name,
            }
          : undefined,
        stock:
          item.minimum_stock === 1 ? 1
          : item.is_sold_out ? 0
          : undefined,
        is_discontinued: item.is_end_of_sale,
        preview: CommonJsonNormalizer.itemPreview(item.music),
        shop: CommonJsonNormalizer.itemShop(item.shop),
      };
    });
  }
}
