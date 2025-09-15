import { HTTPClient } from '@/services';
import { EndpointGenerator } from '@/services/api';
import {
  BItemInWishlist,
  BWishlist,
  BWishlistName,
  BWishlistMetadata,
} from '@/types/boothApi';

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
    try {
      const wishlistLocalUrl = EndpointGenerator.json.getLocalWishlist(wishlistId, page);
      if (!wishlistLocalUrl) return undefined;

      return await this.client.get<BWishlist>(wishlistLocalUrl);
    } catch {
      const wishlistUrl = EndpointGenerator.json.getWishlistItems(wishlistId, page);
      if (!wishlistUrl) return undefined;

      return await this.client.get<BWishlist>(wishlistUrl);
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
    const wishlistNameLocalUrl = EndpointGenerator.json.localWishlistName(wishlistId);
    if (!wishlistNameLocalUrl) return undefined;

    try {
      return await this.client.get<BWishlistMetadata>(wishlistNameLocalUrl);
    } catch {
      const wishlistNameUrl = EndpointGenerator.json.wishlistName(wishlistId);
      if (!wishlistNameUrl) return undefined;

      try {
        return await this.client.get<BWishlistMetadata>(wishlistNameUrl);
      } catch {
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
    const addItemUrl = EndpointGenerator.json.wishlist(itemId);
    if (!addItemUrl) return false;

    try {
      await this.client.post(addItemUrl);
      return true;
    } catch {
      return false;
    }
  }

  async patch(itemId: number, wishlistIds: string[]): Promise<void> {
    const addItemUrl = EndpointGenerator.json.hasItem(itemId);
    if (!addItemUrl) return;

    const body = JSON.stringify({ wish_list_name_codes: wishlistIds });
    await this.client.patch(addItemUrl, body);
  }

  async delete(itemId: number): Promise<void> {
    const removeItemUrl = EndpointGenerator.json.wishlist(itemId);
    if (!removeItemUrl) return;

    try {
      await this.client.delete(removeItemUrl);
    } catch {
      return;
    }
  }
}
