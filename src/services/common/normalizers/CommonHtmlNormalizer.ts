import { CategoryConverter } from '@/services/utils';
import { BoothEvent, ImageInfo, ItemSummary, ShopSummary, SubCategory } from '@/types';
import { BWishlistCounts } from '@/types/boothApi';
import { EItemSummary, EShopSummary } from '@/types/extracted';

export class CommonHtmlNormalizer {
  private constructor() {}

  static items(items: EItemSummary[], wishlistCounts: BWishlistCounts): ItemSummary[] {
    return items.map<ItemSummary>((item) => {
      const subcategory = item.subcategory.match(/[^ ]+$/)![0] as SubCategory;
      const minPrice = Number(item.price.replace(/,/g, '').match(/\d+/)![0]);

      return {
        id: Number(item.id),
        url: `https://booth.pm/ja/items/${item.id}`,
        name: item.title,
        thumbnails: this.thumbnails(item.thumbnails),
        category: CategoryConverter.fromSubCategory(subcategory)!,
        subcategory: subcategory,
        is_vrchat: item.is_vrchat,
        is_adult: item.is_adult,
        min_price: minPrice,
        has_variations: item.price.includes('~'),
        wishlist_count: wishlistCounts.wishlists_counts[item.id],
        wished: wishlistCounts.item_ids.includes(Number(item.id)),
        event:
          item.event ?
            {
              id: item.event as BoothEvent,
              name: item.event_name!,
            }
          : undefined,
        stock:
          item.stock === '残り1点' ? 1
          : item.stock === '在庫なし' ? 0
          : undefined,
        is_discontinued: item.stock === '販売終了',
        preview: item.preview,
        shop: this.shopSummary(item.shop),
      };
    });
  }

  static thumbnails(thumbnails: string[]): ImageInfo[] {
    return thumbnails.map<ImageInfo>((thumbnail) => {
      const imageId = thumbnail.match(/\/([\w-]+\/i\/\d+\/[\w-]+)/)![1];

      return {
        original: `https://booth.pximg.net/${imageId}.png`,
        resized: thumbnail,
      };
    });
  }

  static shopSummary(shop: EShopSummary): ShopSummary {
    return {
      url: shop.url,
      subdomain: shop.url.match(/:\/\/([\w-]+)/)![1],
      name: shop.name,
      icon_url: shop.icon_url.replace('/48x48/', '/128x128/'),
      is_verified: shop.is_verified,
    };
  }
}
