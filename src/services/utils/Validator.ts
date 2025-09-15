export class Validator {
  static validateSubdomain(subdomain: string): string {
    if (!/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/i.test(subdomain) || subdomain.length > 16)
      throw 0;
    return subdomain.toLowerCase();
  }

  static validateItemId(itemId: number): number {
    if (itemId <= 0) throw 0;
    return Math.floor(itemId);
  }

  static validateWishlistId(wishlistId: string): string {
    if (!/^[a-z0-9]{8}$/i.test(wishlistId)) throw 0;
    return wishlistId;
  }

  static validateItemListId(itemListId: string): string {
    return this.validateWishlistId(itemListId);
  }

  static validatePage(page: number): string {
    return String(Math.max(1, Math.floor(page)));
  }
}
