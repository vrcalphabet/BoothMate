import { cheerio } from '@/services';
import type { Element } from 'domhandler';
import {
  EAudioPreview,
  EItemContent,
  EItemContents,
  EItemSummary,
  ESearchResult,
  EShopSummary,
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

  static search(rawHtml: string, page: number): ESearchResult {
    try {
      const $ = cheerio.load(rawHtml);
      return {
        total_items: $('.container > .flex > b').text() || '0',
        current_page: page,
        items: this.search_items($),
      };
    } catch (e) {
      this.printError(e);
    }
  }

  private static search_items($: cheerio.CheerioAPI): EItemSummary[] {
    const items: EItemSummary[] = [];
    $('.market-items > .u-mt-400 > ul li').each((_, element) => {
      const itemElement = $(element);
      items.push({
        id: itemElement.attr('data-product-id')!,
        title: itemElement.find('.item-card__title > a').text(),
        thumbnails: this.search_thumbnails(itemElement),
        subcategory:
          itemElement.find('.item-card__category-anchor').text() ||
          $('.container > .u-pb-300 .text-text-default').text(),
        is_vrchat: itemElement.find('img[alt="VRChat"]').length === 1,
        is_adult: itemElement.find('.adult').length === 1,
        price: itemElement.find('.price').text(),
        wishlist_count: 0,
        event: itemElement.attr('data-product-event') ?? undefined,
        event_name: itemElement.find('.eventname-flag__name').text() || undefined,
        stock: itemElement.find('.l-item-card-badge > .badge').text() || undefined,
        preview: this.search_preview(itemElement),
        shop: this.search_shop(itemElement),
      });
    });
    return items;
  }

  private static search_thumbnails(itemElement: cheerio.Cheerio<Element>): string[] {
    const thumbnails: string[] = [];
    itemElement.find('.item-card__thumbnail-images > a').each((_, thumbnailElement) => {
      thumbnails.push(itemElement.find(thumbnailElement).attr('data-original')!);
    });
    return thumbnails;
  }

  private static search_preview(
    itemElement: cheerio.Cheerio<Element>,
  ): EAudioPreview | undefined {
    const previewElement = itemElement.find('.mini-player-thumbnail');
    if (previewElement.length === 0) {
      return;
    }

    return {
      short: previewElement.attr('data-short')!,
      full: previewElement.attr('data-full')!,
    };
  }

  private static search_shop(itemElement: cheerio.Cheerio<Element>): EShopSummary {
    return {
      url: itemElement.find('.item-card__shop-name-anchor').attr('href')!,
      name: itemElement.find('.item-card__shop-name').text(),
      icon_url: itemElement.find('.user-avatar').attr('src')!,
      is_verified: itemElement.find('.icon-verified').length === 1,
    };
  }

  static get(rawHtml: string): EItemContents {
    try {
      const $ = cheerio.load(rawHtml);
      return {
        event_url: $('.summary .eventname-flag--inner').attr('href'),
        event_name: $('.eventname-flag__name').text() || undefined,
        contents: this.get_contents($),
      };
    } catch (e) {
      this.printError(e);
    }
  }

  private static get_contents($: cheerio.CheerioAPI): EItemContent[] {
    const contents: EItemContent[] = [];
    $('.main-info-column + div > section')
      .children()
      .each((_, element) => {
        const el = $(element);
        if (el.hasClass('shop__text')) {
          contents.push({
            is_paragraph: true,
            title: el.find('h2').text(),
            text: el.find('p').text(),
          });
        } else {
          contents.push({
            is_paragraph: false,
            title: '',
            text: el.html()!,
          });
        }
      });

    return contents;
  }
}
