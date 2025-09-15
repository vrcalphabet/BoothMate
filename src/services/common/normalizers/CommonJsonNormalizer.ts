import { AudioPreview, Item } from '@/types';
import { BItem, BItemShop } from '@/types/boothApi';

export class CommonJsonNormalizer {
  private constructor() {}

  static itemPreview(music: BItem['sound'] | null): AudioPreview | undefined {
    if (!music) return undefined;

    return {
      full: music.full_url,
      short: music.short_url,
    };
  }

  static itemShop(shop: Omit<BItemShop, 'subdomain'>): Item['shop'] {
    return {
      url: shop.url,
      subdomain: shop.url.match(/:\/\/([\w-]+)/)![1],
      name: shop.name,
      icon_url: shop.thumbnail_url.replace('/48x48/', '/128x128/'),
      is_verified: shop.verified,
    };
  }
}
