import { HTTPClient } from '@/services';
import { EndpointGenerator } from '@/api';
import {
  type BItemInWishlist,
  type BWishlist,
  type BWishlistName,
  type BWishlistMetadata,
} from '@/types/booth-api';
import { AuthError } from '@/types';

export class JsonFetcher {
  private client: HTTPClient;

  constructor(client: HTTPClient) {
    this.client = client;
  }

  getNames(): Promise<BWishlistName[]> {
    const wishlistNamesUrl = EndpointGenerator.json.getWishlistNames();
    return this.client.get<BWishlistName[]>(wishlistNamesUrl);
  }

  async getItems(wishlistId: string, page: number): Promise<BWishlist | undefined> {
    const wishlistUrl = EndpointGenerator.json.getWishlistItems(wishlistId, page);
    if (!wishlistUrl) return undefined;

    try {
      console.log(wishlistUrl);
      return await this.client.get<BWishlist>(wishlistUrl);
    } catch {
      const wishlistLocalUrl = EndpointGenerator.json.getLocalWishlist(wishlistId, page);
      if (!wishlistLocalUrl) return undefined;

      try {
        return await this.client.get<BWishlist>(wishlistLocalUrl);
      } catch (e) {
        if (e instanceof AuthError) {
          throw e;
        }
        return undefined;
      }
    }
  }

  async getDefaultItems(page: number): Promise<BWishlist> {
    const allWishlistUrl = EndpointGenerator.json.getLocalWishlist(false, page);
    return await this.client.get<BWishlist>(allWishlistUrl);
  }

  async getUncategorizedItems(page: number): Promise<BWishlist> {
    const uncategorizedWishlistUrl = EndpointGenerator.json.getLocalWishlist(true, page);
    return await this.client.get<BWishlist>(uncategorizedWishlistUrl);
  }

  async getMetadata(wishlistId: string): Promise<BWishlistMetadata | undefined> {
    const wishlistNameUrl = EndpointGenerator.json.wishlistName(wishlistId);
    if (!wishlistNameUrl) return undefined;

    try {
      return await this.client.get<BWishlistMetadata>(wishlistNameUrl);
    } catch {
      const wishlistNameLocalUrl = EndpointGenerator.json.localWishlistName(wishlistId);
      if (!wishlistNameLocalUrl) return undefined;

      try {
        return await this.client.get<BWishlistMetadata>(wishlistNameLocalUrl);
      } catch (e) {
        if (e instanceof AuthError) {
          throw e;
        }
        return undefined;
      }
    }
  }

  async hasItem(itemId: number | string): Promise<BItemInWishlist[]> {
    const hasItemUrl = EndpointGenerator.json.hasItem(Number(itemId));
    if (!hasItemUrl) return [];

    return this.client.get<BItemInWishlist[]>(hasItemUrl);
  }

  async post(itemId: number): Promise<boolean> {
    const addItemUrl = EndpointGenerator.json.wishlistAction(itemId);
    if (!addItemUrl) return false;

    try {
      await this.client.post(addItemUrl);
      return true;
    } catch (e) {
      if (e instanceof AuthError) {
        throw e;
      }
      return false;
    }
  }

  async patch(itemId: number, wishlistIds: string[]): Promise<void> {
    const patchItemUrl = EndpointGenerator.json.hasItem(itemId);
    if (!patchItemUrl) return;

    const body = JSON.stringify({ wish_list_name_codes: wishlistIds });
    await this.client.patch(patchItemUrl, body);
  }

  async delete(itemId: number): Promise<void> {
    const removeItemUrl = EndpointGenerator.json.wishlistAction(itemId);
    if (!removeItemUrl) return;

    try {
      await this.client.delete(removeItemUrl);
    } catch (e) {
      if (e instanceof AuthError) {
        throw e;
      }
      return;
    }
  }
}
