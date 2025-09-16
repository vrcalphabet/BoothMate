import { AgeRestriction, ItemType, SortOrder } from '@/types';
import { Validator } from '@/utils';
import { NSearchFilter } from '@/types/normalized';

export class HtmlEndpointGenerator {
  protected static baseUrl: string = 'https://booth.pm';
  protected static baseAccountUrl: string = 'https://accounts.booth.pm';
  protected static baseApiUrl: string = 'https://api.booth.pm/frontend';

  private constructor() {}

  /**********************************************************/
  /********************** ItemService  **********************/
  /**********************************************************/

  static search(filter: NSearchFilter): string {
    let type: 'query' | 'event' | null = null;

    const endpoint = new URL(`${this.baseUrl}/ja/`);
    if (filter.category) {
      endpoint.pathname += `browse/${encodeURIComponent(filter.category)}`;
    } else if (filter.query) {
      endpoint.pathname += `search/${encodeURIComponent(filter.query)}`;
      type = 'query';
    } else if (filter.event) {
      endpoint.pathname += `events/${encodeURIComponent(filter.event)}`;
      type = 'event';
    } else {
      endpoint.pathname += `items`;
    }

    endpoint.searchParams.set('page', Validator.validatePage(filter.page));

    if (filter.sort !== SortOrder.POPULARITY) {
      endpoint.searchParams.set('sort', filter.sort);
    }
    if (filter.query && type !== 'query') {
      endpoint.searchParams.set('q', filter.query);
    }
    if (filter.event && type !== 'event') {
      endpoint.searchParams.set('event', filter.event);
    }
    if (filter.item_type !== ItemType.UNSPECIFIED) {
      endpoint.searchParams.set('type', filter.item_type);
    }
    if (filter.age_restriction !== AgeRestriction.GENERAL) {
      endpoint.searchParams.set('adult', filter.age_restriction);
    }
    if (!filter.include_unavailable) {
      endpoint.searchParams.set('in_stock', 'true');
    }
    if (filter.min_price > 0) {
      endpoint.searchParams.set('min_price', String(filter.min_price));
    }
    if (filter.max_price && filter.max_price > 0) {
      endpoint.searchParams.set('max_price', String(filter.max_price));
    }

    for (const excludeQuery of filter.exclude_query) {
      endpoint.searchParams.append('except_words[]', excludeQuery);
    }
    for (const tag of filter.tags) {
      endpoint.searchParams.append('tags[]', tag);
    }

    return endpoint.href;
  }

  static getItem(itemId: number): string | undefined {
    try {
      return `${this.baseUrl}/ja/items/${Validator.validateItemId(itemId)}`;
    } catch {
      return undefined;
    }
  }

  /**********************************************************/
  /********************** ShopService  **********************/
  /**********************************************************/

  static getShopItems(subdomain: string, page: number): string | undefined {
    try {
      const endpoint = new URL(
        `https://${Validator.validateSubdomain(subdomain)}.booth.pm/items`,
      );
      endpoint.searchParams.set('page', Validator.validatePage(page));
      return endpoint.href;
    } catch {
      return undefined;
    }
  }

  static getShopItemListItems(
    subdomain: string,
    itemListId: string,
    page: number,
  ): string | undefined {
    try {
      const endpoint = new URL(
        `https://${Validator.validateSubdomain(subdomain)}.booth.pm/item_lists/${Validator.validateItemListId(itemListId)}`,
      );
      endpoint.searchParams.set('page', Validator.validatePage(page));
      return endpoint.href;
    } catch {
      return undefined;
    }
  }
}
