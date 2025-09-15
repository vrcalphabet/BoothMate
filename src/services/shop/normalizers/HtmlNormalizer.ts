import { CommonHtmlNormalizer } from '@/services/common';
import { LinkClassifier } from '@/services/utils';
import { ItemList, ItemListSummary, Link, Shop, ShopItems } from '@/types';
import { BWishlistCounts } from '@/types/booth-api';
import { EItemList, EItemListSummary, ELink, EShop, EShopItems } from '@/types/extracted';

export class HtmlNormalizer {
  private constructor() {}

  static get(shop: EShop): Shop {
    return {
      ...CommonHtmlNormalizer.shopSummary(shop),
      icon_url: shop.icon_url.match(/url\((.+)\)$/)![1],
      username: shop.nickname,
      header_image: shop.header_image,
      description: shop.description,
      links: this.get_links(shop.links),
      item_lists: this.get_itemLists(shop.item_lists),
    };
  }

  private static get_links(links: ELink[]): Link[] {
    return links.map<Link>((link) => {
      const classifiedLink = LinkClassifier.classify(link);
      return classifiedLink;
    });
  }

  private static get_itemLists(itemLists: EItemListSummary[]): ItemListSummary[] {
    return itemLists.map<ItemListSummary>((itemList) => ({
      id: itemList.url.match(/\/item_lists\/(\w+)/)![1],
      name: itemList.name,
      public_url: itemList.url,
    }));
  }

  static getItems(shop: EShopItems, wishlistCounts: BWishlistCounts): ShopItems {
    return {
      current_page: Number(shop.current_page),
      total_pages: Number(shop.total_pages.match(/[?&]page=(\d+)/)![1]),
      items: CommonHtmlNormalizer.items(shop.items, wishlistCounts),
    };
  }

  static getItemList(itemList: EItemList, wishlistCounts: BWishlistCounts): ItemList {
    return {
      id: itemList.url.match(/\/item_lists\/(\w+)/)![1],
      name: itemList.name,
      public_url: itemList.url,
      current_page: Number(itemList.current_page),
      total_pages: Number(itemList.total_pages.match(/[?&]page=(\d+)/)![1]),
      items: CommonHtmlNormalizer.items(itemList.items, wishlistCounts),
    };
  }
}
