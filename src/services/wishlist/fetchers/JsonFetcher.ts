import { JsonEndpointGenerator } from '@/api/JsonEndpointGenerator'
import { AuthError } from '@/errors'
import { HTTPClient } from '@/services/common/HTTPClient'
import {
  type BItemInWishlist,
  type BWishlist,
  type BWishlistMetadata,
  type BWishlistName,
} from '@/types/internal/booth-api'

export class JsonFetcher {
  private client: HTTPClient

  constructor(client: HTTPClient) {
    this.client = client
  }

  getNames(): Promise<BWishlistName[]> {
    const wishlistNamesUrl = JsonEndpointGenerator.getWishlistNames()
    return this.client.get<BWishlistName[]>(wishlistNamesUrl)
  }

  async getItems(wishlistId: string, page: number): Promise<BWishlist | undefined> {
    const wishlistUrl = JsonEndpointGenerator.getWishlistItems(wishlistId, page)
    if (!wishlistUrl) return undefined

    try {
      return await this.client.get<BWishlist>(wishlistUrl)
    } catch {
      const wishlistLocalUrl = JsonEndpointGenerator.getLocalWishlist(
        wishlistId,
        page,
      )
      if (!wishlistLocalUrl) return undefined

      try {
        return await this.client.get<BWishlist>(wishlistLocalUrl)
      } catch (e) {
        if (e instanceof AuthError) {
          throw e
        }
        return undefined
      }
    }
  }

  async getDefaultItems(page: number): Promise<BWishlist> {
    const allWishlistUrl = JsonEndpointGenerator.getLocalWishlist(false, page)
    return await this.client.get<BWishlist>(allWishlistUrl)
  }

  async getUncategorizedItems(page: number): Promise<BWishlist> {
    const uncategorizedWishlistUrl = JsonEndpointGenerator.getLocalWishlist(
      true,
      page,
    )
    return await this.client.get<BWishlist>(uncategorizedWishlistUrl)
  }

  async getMetadata(wishlistId: string): Promise<BWishlistMetadata | undefined> {
    const wishlistNameUrl = JsonEndpointGenerator.wishlistName(wishlistId)
    if (!wishlistNameUrl) return undefined

    try {
      return await this.client.get<BWishlistMetadata>(wishlistNameUrl)
    } catch {
      const wishlistNameLocalUrl =
        JsonEndpointGenerator.localWishlistName(wishlistId)
      if (!wishlistNameLocalUrl) return undefined

      try {
        return await this.client.get<BWishlistMetadata>(wishlistNameLocalUrl)
      } catch (e) {
        if (e instanceof AuthError) {
          throw e
        }
        return undefined
      }
    }
  }

  async hasItem(itemId: number | string): Promise<BItemInWishlist[]> {
    const hasItemUrl = JsonEndpointGenerator.hasItem(Number(itemId))
    if (!hasItemUrl) return []

    return this.client.get<BItemInWishlist[]>(hasItemUrl)
  }

  async post(itemId: number): Promise<boolean> {
    const addItemUrl = JsonEndpointGenerator.wishlistAction(itemId)
    if (!addItemUrl) return false

    try {
      await this.client.post(addItemUrl)
      return true
    } catch (e) {
      if (e instanceof AuthError) {
        throw e
      }
      return false
    }
  }

  async patch(itemId: number, wishlistIds: string[]): Promise<void> {
    const patchItemUrl = JsonEndpointGenerator.hasItem(itemId)
    if (!patchItemUrl) return

    const body = JSON.stringify({ wish_list_name_codes: wishlistIds })
    await this.client.patch(patchItemUrl, body)
  }

  async delete(itemId: number): Promise<void> {
    const removeItemUrl = JsonEndpointGenerator.wishlistAction(itemId)
    if (!removeItemUrl) return

    try {
      await this.client.delete(removeItemUrl)
    } catch (e) {
      if (e instanceof AuthError) {
        throw e
      }
      return
    }
  }
}
