import { BoothMate } from '@/BoothMate';
import 'dotenv/config';

if (!process.env.SESSION_TOKEN || !process.env.CSRF_TOKEN) {
  throw new Error('.envにSESSION_TOKENとCSRF_TOKENを設定してください');
}

const client = new BoothMate(process.env.SESSION_TOKEN!, process.env.CSRF_TOKEN!, true);

describe('BoothMate.wishlist', () => {
  describe('BoothMate.wishlist.getNames', () => {
    it('配列が返るか？', async () => {
      const result = await client.wishlist.getNames();
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe('BoothMate.wishlist.getItems', () => {
    it('有効なウィッシュリストIDで連想配列が返るか？', async () => {
      const result = await client.wishlist.getItems(global.WISHLIST_ID);
      expect(result).toBeDefined();
      expect(isObject(result)).toBe(true);
    });

    it('存在しないウィッシュリストIDでundefinedが返るか？', async () => {
      const result = await client.wishlist.getItems('AAAAAAAA');
      expect(result).toBeUndefined();
    });

    it('無効なウィッシュリストIDでundefinedが返るか？', async () => {
      const result = await client.wishlist.getItems('invalid_wishlist!');
      expect(result).toBeUndefined();
    });

    it('空文字のウィッシュリストIDでundefinedが返るか？', async () => {
      const result = await client.wishlist.getItems('');
      expect(result).toBeUndefined();
    });
  });

  describe('BoothMate.wishlist.getDefaultItems', () => {
    it('連想配列が返るか？', async () => {
      const result = await client.wishlist.getDefaultItems();
      expect(result).toBeDefined();
      expect(isObject(result)).toBe(true);
    });
  });

  describe('BoothMate.wishlist.getUncategorizedItems', () => {
    it('連想配列が返るか？', async () => {
      const result = await client.wishlist.getUncategorizedItems();
      expect(result).toBeDefined();
      expect(isObject(result)).toBe(true);
    });
  });

  describe('BoothMate.wishlist.removeItem', () => {
    it('ウィッシュリストに含まれる商品IDを削除してエラーが発生しないか？', async () => {
      const result = client.wishlist.removeItem(
        global.ITEM_ID_INCLUDED,
        global.WISHLIST_ID,
      );
      await expect(result).resolves.not.toThrow();
    });

    it('ウィッシュリストに含まれていない商品IDを削除してエラーが発生しないか？', async () => {
      const result = client.wishlist.removeItem(
        global.ITEM_ID_NOT_INCLUDED,
        global.WISHLIST_ID,
      );
      await expect(result).resolves.not.toThrow();
    });

    it('存在しないウィッシュリストIDを指定してエラーが発生しないか？', async () => {
      const result = client.wishlist.removeItem(global.ITEM_ID_INCLUDED, 'AAAAAAAA');
      await expect(result).resolves.not.toThrow();
    });

    it('空文字のウィッシュリストIDを指定してもエラーが発生しないか？', async () => {
      const result = client.wishlist.removeItem(global.ITEM_ID_INCLUDED, '');
      await expect(result).resolves.not.toThrow();
    });

    it('無効な商品IDを削除してエラーが発生しないか？', async () => {
      const result = client.wishlist.removeItem(1, global.WISHLIST_ID);
      await expect(result).resolves.not.toThrow();
    });

    it('無効なウィッシュリストIDを指定してエラーが発生しないか？', async () => {
      const result = client.wishlist.removeItem(1, 'invalid_wishlist!');
      await expect(result).resolves.not.toThrow();
    });

    it('デフォルトのスキリストから有効な商品IDを削除してエラーが発生しないか？', async () => {
      const result = client.wishlist.removeItem(global.ITEM_ID_INCLUDED);
      await expect(result).resolves.not.toThrow();
    });

    it('デフォルトのスキリストから無効な商品IDを削除してエラーが発生しないか？', async () => {
      const result = client.wishlist.removeItem(global.ITEM_ID_NOT_INCLUDED);
      await expect(result).resolves.not.toThrow();
    });
  });

  describe('BoothMate.wishlist.addItem', () => {
    it('デフォルトのスキリストに有効な商品IDを追加してエラーが発生しないか？', async () => {
      const result = client.wishlist.addItem(global.ITEM_ID_INCLUDED);
      await expect(result).resolves.not.toThrow();
    });

    it('デフォルトのスキリストに無効な商品IDを追加してエラーが発生しないか？', async () => {
      const result = client.wishlist.addItem(1);
      await expect(result).resolves.not.toThrow();
    });

    it('有効な商品IDを追加してエラーが発生しないか？', async () => {
      const result = client.wishlist.addItem(global.ITEM_ID_INCLUDED, global.WISHLIST_ID);
      await expect(result).resolves.not.toThrow();
    });

    it('ウィッシュリストに既に含まれている商品IDを追加してエラーが発生しないか？', async () => {
      const result = client.wishlist.addItem(global.ITEM_ID_INCLUDED, global.WISHLIST_ID);
      await expect(result).resolves.not.toThrow();
    });

    it('存在しないウィッシュリストIDを指定してエラーが発生しないか？', async () => {
      const result = client.wishlist.addItem(global.ITEM_ID_INCLUDED, 'AAAAAAAA');
      await expect(result).resolves.not.toThrow();
    });

    it('空文字のウィッシュリストIDを指定してもエラーが発生しないか？', async () => {
      const result = client.wishlist.addItem(global.ITEM_ID_INCLUDED, '');
      await expect(result).resolves.not.toThrow();
    });

    it('無効な商品IDを追加してエラーが発生しないか？', async () => {
      const result = client.wishlist.addItem(1, global.WISHLIST_ID);
      await expect(result).resolves.not.toThrow();
    });

    it('無効なウィッシュリストIDを指定してエラーが発生しないか？', async () => {
      const result = client.wishlist.addItem(1, 'invalid_wishlist!');
      await expect(result).resolves.not.toThrow();
    });
  });

  describe('BoothMate.wishlist.isItemInWishlist', () => {
    it('ウィッシュリストに含まれている商品IDでtrueが返るか？', async () => {
      const result = await client.wishlist.hasItem(
        global.ITEM_ID_INCLUDED,
        global.WISHLIST_ID,
      );
      expect(result).toBe(true);
    });

    it('ウィッシュリストに含まれていない商品IDでfalseが返るか？', async () => {
      const result = await client.wishlist.hasItem(
        global.ITEM_ID_NOT_INCLUDED,
        global.WISHLIST_ID,
      );
      expect(result).toBe(false);
    });

    it('存在しないウィッシュリストIDでfalseが返るか？', async () => {
      const result = await client.wishlist.hasItem(global.ITEM_ID_INCLUDED, 'AAAAAAAA');
      expect(result).toBe(false);
    });

    it('空文字のウィッシュリストIDでfalseが返るか？', async () => {
      const result = await client.wishlist.hasItem(global.ITEM_ID_INCLUDED, '');
      expect(result).toBe(false);
    });

    it('無効な商品IDでfalseが返るか？', async () => {
      const result = await client.wishlist.hasItem(1, global.WISHLIST_ID);
      expect(result).toBe(false);
    });

    it('無効なウィッシュリストIDでfalseが返るか？', async () => {
      const result = await client.wishlist.hasItem(1, 'invalid_wishlist!');
      expect(result).toBe(false);
    });
  });
});

function isObject(value: unknown): boolean {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) return false;
  return true;
}
