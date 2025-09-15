import { cheerio } from '@/services';
import { BItemSummary } from '@/types/booth-api';
import {
  EItemList,
  EItemListSummary,
  EItemSummary,
  ELink,
  EShop,
  EShopItems,
} from '@/types/extracted';

export class HtmlExtractor {
  private constructor() {}

  private static printError(e: any): never {
    throw new Error(
      e +
        '\n\nBoothのHTML構造が変化しています。お手数ですが，Issueを立ててください。' +
        '\nhttps://github.com/vrcalphabet/BoothMate/issues',
    );
  }

  static get(rawHtml: string, subdomain: string): EShop {
    try {
      const $ = cheerio.load(rawHtml);
      const tagNameOfshopName = $('.display_title').prop('tagName');
      const name =
        tagNameOfshopName === 'span' ?
          $('.display_title').text()
        : $('.display_title > img').attr('title')!;

      return {
        url: `https://${subdomain}.booth.pm/`,
        name: name,
        nickname: $('.home-link-container__nickname a').text(),
        icon_url: $('.avatar-image').attr('style')!,
        is_verified: $('.verified-booth').length === 1,
        header_image: $('.header-image').attr('src'),
        description: $('.booth-description > .autolink > div').text(),
        links: this.get_links($),
        item_lists: this.get_itemLists($),
      };
    } catch (e) {
      this.printError(e);
    }
  }

  private static get_links($: cheerio.CheerioAPI): ELink[] {
    const links: ELink[] = [];
    $('.booth-description > .flex > a').each((_, element) => {
      const el = $(element);

      links.push({
        url: el.attr('href')!,
        caption: el.attr('title') || undefined,
      });
    });
    return links;
  }

  private static get_itemLists($: cheerio.CheerioAPI): EItemListSummary[] {
    if ($('.item-list-nav').length === 0) {
      return [];
    }

    const itemLists: EItemListSummary[] = [];
    $('.item-list-nav a').each((_, element) => {
      itemLists.push({
        url: $(element).attr('href')!,
        name: $(element).find('.item-list-tablet-label-inner').text(),
      });
    });
    return itemLists;
  }

  static getItems(rawHtml: string, page: number): EShopItems {
    try {
      const $ = cheerio.load(rawHtml);

      return {
        current_page: page,
        total_pages: $('.shop-pager .last-page').attr('href') ?? '?page=1',
        items: this.getItems_items($),
      };
    } catch (e) {
      this.printError(e);
    }
  }

  private static getItems_items($: cheerio.CheerioAPI): EItemSummary[] {
    const items: EItemSummary[] = [];
    $('.item-list li').each((_, element) => {
      const itemString = $(element).attr('data-item')!;
      const item = JSON.parse(itemString) as BItemSummary;
      items.push({
        id: String(item.id),
        title: item.name,
        thumbnails: item.thumbnail_image_urls,
        subcategory: item.category.name.ja,
        is_vrchat: item.is_vrchat,
        is_adult: item.is_adult,
        price: item.price,
        wishlist_count: 0,
        event: item.event?.url ?? undefined,
        event_name: item.event?.name ?? undefined,
        stock:
          item.is_end_of_sale ? '販売終了'
          : item.minimum_stock === 1 ? '残り1点'
          : item.is_sold_out ? '在庫なし'
          : undefined,
        preview:
          item.music ?
            {
              short: item.music.short_url,
              full: item.music.full_url,
            }
          : undefined,
        shop: {
          url: item.shop.url,
          name: item.shop.name,
          icon_url: item.shop.thumbnail_url,
          is_verified: item.shop.verified,
        },
      });
    });
    return items;
  }

  static getItemList(
    rawHtml: string,
    subdomain: string,
    itemlistId: string,
    page: number,
  ): EItemList {
    try {
      const $ = cheerio.load(rawHtml);
      const itemListUrl = `https://${subdomain}.booth.pm/item_lists/${itemlistId}`;
      const itemListName = $($('.item-list-breadcrumb').contents()[2]).text();

      return {
        current_page: page,
        total_pages: $('.shop-pager .last-page').attr('href') ?? '?page=1',
        items: this.getItems_items($),
        url: itemListUrl,
        name: itemListName,
      };
    } catch (e) {
      this.printError(e);
    }
  }
}
