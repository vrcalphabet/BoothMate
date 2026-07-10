import { type EndpointUrlSpec } from '@/types/internal';
import { Validator } from '@/utils';

export class JsonEndpointGenerator {
  protected static baseUrl: string = 'https://booth.pm';
  protected static baseAccountUrl: string = 'https://accounts.booth.pm';
  protected static baseApiUrl: string = 'https://api.booth.pm/frontend';

  private constructor() {}

  static wishlistCounts(wishlistIds: string[]): EndpointUrlSpec {
    const endpoint = new URL(`${this.baseAccountUrl}/wish_lists.json`);

    wishlistIds.forEach((id) => {
      endpoint.searchParams.append('item_ids[]', id);
    });

    return { url: endpoint.href, requiresSession: false, requiresCsrf: false };
  }

  /**********************************************************/
  /********************** ItemService  **********************/
  /**********************************************************/

  static getItem(itemId: number): EndpointUrlSpec | undefined {
    try {
      const endpoint = `${this.baseUrl}/ja/items/${Validator.validateItemId(itemId)}.json`;
      return { url: endpoint, requiresSession: false, requiresCsrf: false };
    } catch {
      return undefined;
    }
  }

  /**********************************************************/
  /******************** UtilityService  *********************/
  /**********************************************************/

  static getManifest(): EndpointUrlSpec {
    const endpoint = `${this.baseUrl}/manifest.json`;
    return { url: endpoint, requiresSession: false, requiresCsrf: false };
  }

  static autocomplete(query: string): EndpointUrlSpec {
    const endpoint = new URL(`${this.baseUrl}/autocomplete/tag.json`);
    endpoint.searchParams.set('term', query);
    return { url: endpoint.href, requiresSession: false, requiresCsrf: false };
  }

  /**********************************************************/
  /******************** WishlistService  ********************/
  /**********************************************************/

  static getWishlistNames(): EndpointUrlSpec {
    const endpoint = `${this.baseAccountUrl}/wish_list_names.json`;
    return { url: endpoint, requiresSession: true, requiresCsrf: false };
  }

  static getWishlistItems(wishlistId: string, page: number): EndpointUrlSpec | undefined {
    try {
      const endpoint = new URL(
        `${this.baseApiUrl}/wish_list_names/${Validator.validateWishlistId(wishlistId)}/items.json`,
      );
      endpoint.searchParams.set('page', Validator.validatePage(page));
      return { url: endpoint.href, requiresSession: false, requiresCsrf: false };
    } catch {
      return undefined;
    }
  }

  static getLocalWishlist(wishlistId: string, page: number): EndpointUrlSpec | undefined;
  static getLocalWishlist(uncategorized: boolean, page: number): EndpointUrlSpec;
  static getLocalWishlist(
    wishlistId_or_uncategorized: string | boolean,
    page: number,
  ): EndpointUrlSpec | undefined {
    const endpoint = new URL(`${this.baseAccountUrl}/wish_list_name_items.json`);
    endpoint.searchParams.set('page', Validator.validatePage(page));
    if (typeof wishlistId_or_uncategorized === 'string') {
      try {
        endpoint.searchParams.set(
          'wish_list_name_code',
          Validator.validateWishlistId(wishlistId_or_uncategorized),
        );
      } catch {
        return undefined;
      }
    } else if (wishlistId_or_uncategorized === true) {
      endpoint.searchParams.set('uncategorized', 'true');
    }
    return { url: endpoint.href, requiresSession: true, requiresCsrf: false };
  }

  static wishlistName(wishlistId: string): EndpointUrlSpec | undefined {
    try {
      const endpoint = new URL(
        `${this.baseApiUrl}/wish_list_names/${Validator.validateWishlistId(wishlistId)}.json`,
      );
      return { url: endpoint.href, requiresSession: false, requiresCsrf: false };
    } catch {
      return undefined;
    }
  }

  static localWishlistName(wishlistId: string): EndpointUrlSpec | undefined {
    try {
      const endpoint = new URL(
        `${this.baseApiUrl}/accounts/wish_list_names/${Validator.validateWishlistId(wishlistId)}.json`,
      );
      return { url: endpoint.href, requiresSession: true, requiresCsrf: false };
    } catch {
      return undefined;
    }
  }

  static hasItem(itemId: number): EndpointUrlSpec | undefined {
    try {
      const endpoint = new URL(
        `${this.baseUrl}/items/${Validator.validateItemId(itemId)}/wish_list_items.json`,
      );
      return { url: endpoint.href, requiresSession: true, requiresCsrf: false };
    } catch (err) {
      return undefined;
    }
  }

  static wishlistAction(itemId: number): EndpointUrlSpec | undefined {
    try {
      const endpoint = new URL(
        `${this.baseUrl}/items/${Validator.validateItemId(itemId)}/wish_list`,
      );
      return { url: endpoint.href, requiresSession: true, requiresCsrf: true };
    } catch (err) {
      return undefined;
    }
  }

  /**********************************************************/
  /****************** NotficationService  *******************/
  /**********************************************************/

  static notificationList(): EndpointUrlSpec {
    const endpoint = `${this.baseAccountUrl}/activities/partial.json`;
    return { url: endpoint, requiresSession: true, requiresCsrf: false };
  }
}
