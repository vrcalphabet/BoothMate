import { Validator } from '@/utils';

export class JsonEndpointGenerator {
  protected static baseUrl: string = 'https://booth.pm';
  protected static baseAccountUrl: string = 'https://accounts.booth.pm';
  protected static baseApiUrl: string = 'https://api.booth.pm/frontend';

  private constructor() {}

  static wishlistCounts(wishlistIds: string[]): string {
    const endpoint = new URL(`${this.baseAccountUrl}/wish_lists.json`);

    wishlistIds.forEach((id) => {
      endpoint.searchParams.append('item_ids[]', id);
    });

    return endpoint.href;
  }

  /**********************************************************/
  /********************** ItemService  **********************/
  /**********************************************************/

  static getItem(itemId: number): string | undefined {
    try {
      return `${this.baseUrl}/ja/items/${Validator.validateItemId(itemId)}.json`;
    } catch {
      return undefined;
    }
  }

  /**********************************************************/
  /******************** UtilityService  *********************/
  /**********************************************************/

  static getManifest(): string {
    return `${this.baseUrl}/manifest.json`;
  }

  static autocomplete(query: string): string {
    const endpoint = new URL(`${this.baseUrl}/autocomplete/tag.json`);
    endpoint.searchParams.set('term', query);
    return endpoint.href;
  }

  /**********************************************************/
  /******************** WishlistService  ********************/
  /**********************************************************/

  static getWishlistNames(): string {
    return `${this.baseAccountUrl}/wish_list_names.json`;
  }

  static getWishlistItems(wishlistId: string, page: number): string | undefined {
    try {
      const endpoint = new URL(
        `${this.baseApiUrl}/wish_list_names/${Validator.validateWishlistId(wishlistId)}/items.json`,
      );
      endpoint.searchParams.set('page', Validator.validatePage(page));
      return endpoint.href;
    } catch {
      return undefined;
    }
  }

  static getLocalWishlist(wishlistId: string, page: number): string | undefined;
  static getLocalWishlist(uncategorized: boolean, page: number): string;
  static getLocalWishlist(
    wishlistId_or_uncategorized: string | boolean,
    page: number,
  ): string | undefined {
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
    return endpoint.href;
  }

  static wishlistName(wishlistId: string): string | undefined {
    try {
      const endpoint = new URL(
        `${this.baseApiUrl}/wish_list_names/${Validator.validateWishlistId(wishlistId)}.json`,
      );
      return endpoint.href;
    } catch {
      return undefined;
    }
  }

  static localWishlistName(wishlistId: string): string | undefined {
    try {
      const endpoint = new URL(
        `${this.baseApiUrl}/accounts/wish_list_names/${Validator.validateWishlistId(wishlistId)}.json`,
      );
      return endpoint.href;
    } catch {
      return undefined;
    }
  }

  static hasItem(itemId: number): string | undefined {
    try {
      const endpoint = new URL(
        `${this.baseUrl}/items/${Validator.validateItemId(itemId)}/wish_list_items.json`,
      );
      return endpoint.href;
    } catch (err) {
      return undefined;
    }
  }

  static wishlist(itemId: number): string | undefined {
    try {
      const endpoint = new URL(
        `${this.baseUrl}/items/${Validator.validateItemId(itemId)}/wish_list`,
      );
      return endpoint.href;
    } catch (err) {
      return undefined;
    }
  }

  /**********************************************************/
  /****************** NotficationService  *******************/
  /**********************************************************/

  static notficationList(): string {
    return `${this.baseAccountUrl}/activities/partial.json`;
  }
}
