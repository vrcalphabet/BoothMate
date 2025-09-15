import { Category } from '@/types';
import { BoothMate } from '@/BoothMate';
import 'dotenv/config';

if (!process.env.SESSION_TOKEN || !process.env.CSRF_TOKEN) {
  throw new Error('.envにSESSION_TOKENとCSRF_TOKENを設定してください');
}

const client = new BoothMate(process.env.SESSION_TOKEN!, process.env.CSRF_TOKEN!, true);

describe('BoothMate.item', () => {
  describe('BoothMate.item.search', () => {
    it('検索クエリを指定して検索結果が返るか？', async () => {
      const result = await client.item.search('vr');
      expect(result).toBeDefined();
      expect(isObject(result)).toBe(true);
      expect(Array.isArray(result.items)).toBe(true);
    });

    it('検索フィルターのみで検索結果が返るか？', async () => {
      const result = await client.item.search({ category: Category.THREE_D_MODEL });
      expect(result).toBeDefined();
      expect(isObject(result)).toBe(true);
      expect(Array.isArray(result.items)).toBe(true);
    });

    it('検索クエリとフィルターを指定して検索結果が返るか？', async () => {
      const result = await client.item.search('vr', { category: Category.THREE_D_MODEL });
      expect(result).toBeDefined();
      expect(isObject(result)).toBe(true);
      expect(Array.isArray(result.items)).toBe(true);
    });

    it('空の検索クエリで全商品一覧が返るか？', async () => {
      const result = await client.item.search('');
      expect(result).toBeDefined();
      expect(isObject(result)).toBe(true);
      expect(Array.isArray(result.items)).toBe(true);
    });

    it('引数なしで全商品一覧が返るか？', async () => {
      const result = await client.item.search();
      expect(result).toBeDefined();
      expect(isObject(result)).toBe(true);
      expect(Array.isArray(result.items)).toBe(true);
    });

    it('存在しない検索クエリで空の配列が返るか？', async () => {
      const result = await client.item.search('X7r$k2!pQ9@dZ#tM1eW&');
      expect(result).toBeDefined();
      expect(isObject(result)).toBe(true);
      expect(Array.isArray(result.items)).toBe(true);
      expect(result.items.length).toBe(0);
    });

    it('ページネーション情報が含まれているか？', async () => {
      const result = await client.item.search('vr');
      expect(result).toBeDefined();
      expect(typeof result.current_page).toBe('number');
      expect(typeof result.total_pages).toBe('number');
    });
  });

  describe('BoothMate.item.existsItem', () => {
    it('有効な商品IDでtrueが返るか？', async () => {
      const result = await client.item.exists(global.ITEM_ID_INCLUDED);
      expect(result).toBe(true);
    });

    it('存在しない商品IDでfalseが返るか？', async () => {
      const result = await client.item.exists(999999999);
      expect(result).toBe(false);
    });

    it('無効な商品IDでfalseが返るか？', async () => {
      const result = await client.item.exists(0);
      expect(result).toBe(false);
    });

    it('負の商品IDでfalseが返るか？', async () => {
      const result = await client.item.exists(-1);
      expect(result).toBe(false);
    });
  });

  describe('BoothMate.item.getItem', () => {
    it('有効な商品IDで商品情報が返るか？', async () => {
      const result = await client.item.get(global.ITEM_ID_INCLUDED);
      expect(result).toBeDefined();
      expect(isObject(result)).toBe(true);
      expect(result?.id).toBe(global.ITEM_ID_INCLUDED);
    });

    it('存在しない商品IDでundefinedが返るか？', async () => {
      const result = await client.item.get(999999999);
      expect(result).toBeUndefined();
    });

    it('無効な商品IDでundefinedが返るか？', async () => {
      const result = await client.item.get(0);
      expect(result).toBeUndefined();
    });

    it('負の商品IDでundefinedが返るか？', async () => {
      const result = await client.item.get(-1);
      expect(result).toBeUndefined();
    });

    it('includeContents=falseで基本商品情報が返るか？', async () => {
      const result = await client.item.get(global.ITEM_ID_INCLUDED, false);
      expect(result).toBeDefined();
      expect(isObject(result)).toBe(true);
      expect(result?.id).toBe(global.ITEM_ID_INCLUDED);
    });

    it('includeContents=trueで詳細商品情報が返るか？', async () => {
      const result = await client.item.get(global.ITEM_ID_INCLUDED, true);
      expect(result).toBeDefined();
      expect(isObject(result)).toBe(true);
      expect(result?.id).toBe(global.ITEM_ID_INCLUDED);
    });

    it('includeContents省略時は基本商品情報が返るか？', async () => {
      const result = await client.item.get(global.ITEM_ID_INCLUDED);
      expect(result).toBeDefined();
      expect(isObject(result)).toBe(true);
      expect(result?.id).toBe(global.ITEM_ID_INCLUDED);
    });

    it('存在しない商品IDでincludeContents=trueでもundefinedが返るか？', async () => {
      const result = await client.item.get(999999999, true);
      expect(result).toBeUndefined();
    });
  });
});

function isObject(value: unknown): boolean {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) return false;
  return true;
}
