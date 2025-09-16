import { BoothMate } from '@/BoothMate';
import 'dotenv/config';

if (!process.env.SESSION_TOKEN || !process.env.CSRF_TOKEN) {
  throw new Error('.envにSESSION_TOKENとCSRF_TOKENを設定してください');
}

const client = new BoothMate(process.env.SESSION_TOKEN, process.env.CSRF_TOKEN);
const badClient = new BoothMate('invalid_session!', 'invalid_csrf!');

describe('BoothMate.utils', () => {
  describe('BoothMate.utils.getManifest', () => {
    it('連想配列が返るか？', async () => {
      const result = await client.utils.getManifest();
      expect(result).toBeDefined();
      expect(isObject(result)).toBe(true);
    });
  });

  describe('BoothMate.utils.validateToken', () => {
    it('有効なセッションIDでtrueが返るか？', async () => {
      const result = await client.utils.validateToken();
      expect(result).toBe(true);
    });

    it('無効なセッションIDでfalseが返るか？', async () => {
      const result = await badClient.utils.validateToken();
      expect(result).toBe(false);
    });
  });

  describe('BoothMate.utils.autocomplete', () => {
    it('予測可能な文字列で長さ1以上の配列が返るか？', async () => {
      const result = await client.utils.autocomplete('vr');
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThanOrEqual(1);
    });

    it('予測不可能な文字列で空の配列が返るか？', async () => {
      const result = await client.utils.autocomplete('X7r$k2!pQ9@dZ#tM1eW&');
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });

    it('空の文字列で空の配列が返るか？', async () => {
      const result = await client.utils.autocomplete('');
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  });

  describe('BoothMate.utils.extractItemId', () => {
    it('有効な商品URLから正しい商品IDが返るか？', () => {
      const url1 = 'https://booth.pm/ja/items/123456';
      const url2 = 'https://exam-ple.booth.pm/items/654321';
      expect(client.utils.extractItemId(url1)).toBe(123456);
      expect(client.utils.extractItemId(url2)).toBe(654321);
    });

    it('無効な商品IDでundefinedが返るか？', () => {
      const url1 = 'https://booth.pm/ja/items/abcde';
      const url2 = 'https://exam-ple.booth.pm/items/abcde';
      expect(client.utils.extractItemId(url1)).toBeUndefined();
      expect(client.utils.extractItemId(url2)).toBeUndefined();
    });

    it('商品IDを含まないURLでundefinedが返るか？', () => {
      const url = 'https://booth.pm/ja/items/';
      const url2 = 'https://exam-ple.booth.pm/items/';
      expect(client.utils.extractItemId(url)).toBeUndefined();
      expect(client.utils.extractItemId(url2)).toBeUndefined();
    });

    it('無効な形式のURLでundefinedが返るか？', () => {
      const url = 'invalid_url';
      expect(client.utils.extractItemId(url)).toBeUndefined();
    });

    it('最小桁の商品ID(1)を含むURLで正しく抽出できるか？', () => {
      const url = 'https://booth.pm/ja/items/1';
      const url2 = 'https://a.booth.pm/items/1';
      expect(client.utils.extractItemId(url)).toBe(1);
      expect(client.utils.extractItemId(url2)).toBe(1);
    });

    it('先頭ゼロの商品IDは数値として解釈されるか？', () => {
      const url = 'https://booth.pm/ja/items/000123';
      const url2 = 'https://ab.booth.pm/items/000123';
      expect(client.utils.extractItemId(url)).toBe(123);
      expect(client.utils.extractItemId(url2)).toBe(123);
    });

    it('言語コードにハイフンを含む(ja-jp)URLで抽出できるか？', () => {
      const url = 'https://booth.pm/ja-jp/items/42';
      expect(client.utils.extractItemId(url)).toBe(42);
    });

    it('末尾にクエリ/パラメータが付いていても抽出できるか？', () => {
      const url1 = 'https://booth.pm/ja/items/987654?utm_source=test';
      const url2 = 'https://abc.booth.pm/items/987654#fragment';
      expect(client.utils.extractItemId(url1)).toBe(987654);
      expect(client.utils.extractItemId(url2)).toBe(987654);
    });
  });

  describe('BoothMate.utils.extractShopId', () => {
    it('有効なショップURLから正しいショップIDが返るか？', () => {
      const url1 = 'https://example.booth.pm/';
      const url2 = 'https://exam-ple.booth.pm/items/123456';
      const url3 = 'https://example-.booth.pm/item_lists/8OVTLANn';
      expect(client.utils.extractSubdomain(url1)).toBe('example');
      expect(client.utils.extractSubdomain(url2)).toBe('exam-ple');
      expect(client.utils.extractSubdomain(url3)).toBe('example-');
    });

    it('無効なショップURLでundefinedが返るか？', () => {
      const url1 = 'https://exam_ple.booth.pm/';
      const url2 = 'https://example..booth.pm/item_lists/8OVTLANn';
      expect(client.utils.extractSubdomain(url1)).toBeUndefined();
      expect(client.utils.extractSubdomain(url2)).toBeUndefined();
    });

    it('ショップIDを含まないURLでundefinedが返るか？', () => {
      const url1 = 'https://booth.pm/';
      const url2 = 'https://booth.pm/items/123456';
      expect(client.utils.extractSubdomain(url1)).toBeUndefined();
      expect(client.utils.extractSubdomain(url2)).toBeUndefined();
    });

    it('無効な形式のURLでundefinedが返るか？', () => {
      const url = 'invalid_url!';
      expect(client.utils.extractSubdomain(url)).toBeUndefined();
    });

    it('最小長のサブドメイン(1文字)で抽出できるか？', () => {
      const url = 'https://a.booth.pm/';
      expect(client.utils.extractSubdomain(url)).toBe('a');
    });

    it('サブドメインにハイフンを含む(先頭/中間/末尾)で抽出できるか？', () => {
      const url1 = 'https://a-b.booth.pm/';
      const url2 = 'https://-a.booth.pm/';
      const url3 = 'https://a-.booth.pm/';
      expect(client.utils.extractSubdomain(url1)).toBe('a-b');
      expect(client.utils.extractSubdomain(url2)).toBe('-a');
      expect(client.utils.extractSubdomain(url3)).toBe('a-');
    });

    it('パスやクエリが付いていても抽出できるか？', () => {
      const url1 = 'https://abc.booth.pm/items/123456?x=1';
      const url2 = 'https://example-.booth.pm/item_lists/8OVTLANn#top';
      expect(client.utils.extractSubdomain(url1)).toBe('abc');
      expect(client.utils.extractSubdomain(url2)).toBe('example-');
    });
  });

  describe('BoothMate.utils.extractWishlistId', () => {
    it('有効なウィッシュリストURLから正しいIDが返るか？', () => {
      const url1 = 'https://accounts.booth.pm/wish_lists/8OVTLANn';
      const url2 = 'https://booth.pm/wish_list_names/Z1x2Y3aB';
      expect(client.utils.extractWishlistId(url1)).toBe('8OVTLANn');
      expect(client.utils.extractWishlistId(url2)).toBe('Z1x2Y3aB');
    });

    it('無効なウィッシュリストURLでundefinedが返るか？', () => {
      const url1 = 'https://accounts.booth.pm/wish_lists/INVALID-!';
      const url2 = 'https://booth.pm/wish_list_names/1234567';
      const url3 = 'https://booth.pm/wish_list_names/123456789';
      expect(client.utils.extractWishlistId(url1)).toBeUndefined();
      expect(client.utils.extractWishlistId(url2)).toBeUndefined();
      expect(client.utils.extractWishlistId(url3)).toBeUndefined();
    });

    it('ウィッシュリストIDを含まないURLでundefinedが返るか？', () => {
      const url1 = 'https://accounts.booth.pm/wish_lists/';
      const url2 = 'https://booth.pm/wish_list_names/';
      expect(client.utils.extractWishlistId(url1)).toBeUndefined();
      expect(client.utils.extractWishlistId(url2)).toBeUndefined();
    });

    it('無効な形式のURLでundefinedが返るか？', () => {
      const url = 'invalid_url!';
      expect(client.utils.extractWishlistId(url)).toBeUndefined();
    });

    it('最小・最大長(8文字固定)の英数IDを抽出できるか？', () => {
      const url1 = 'https://accounts.booth.pm/wish_lists/00000000';
      const url2 = 'https://booth.pm/wish_list_names/Zz9Yy8Xx';
      expect(client.utils.extractWishlistId(url1)).toBe('00000000');
      expect(client.utils.extractWishlistId(url2)).toBe('Zz9Yy8Xx');
    });

    it('IDが7文字/9文字の場合は抽出されないか？', () => {
      const tooShort1 = 'https://accounts.booth.pm/wish_lists/1234567';
      const tooShort2 = 'https://booth.pm/wish_list_names/1234567';
      const tooLong1 = 'https://accounts.booth.pm/wish_lists/123456789';
      const tooLong2 = 'https://booth.pm/wish_list_names/123456789';
      expect(client.utils.extractWishlistId(tooShort1)).toBeUndefined();
      expect(client.utils.extractWishlistId(tooShort2)).toBeUndefined();
      expect(client.utils.extractWishlistId(tooLong1)).toBeUndefined();
      expect(client.utils.extractWishlistId(tooLong2)).toBeUndefined();
    });

    it('非英数字(ハイフン/アンダースコア等)を含むIDは抽出されないか？', () => {
      const url1 = 'https://accounts.booth.pm/wish_lists/abcd-123';
      const url2 = 'https://booth.pm/wish_list_names/abcd_123';
      expect(client.utils.extractWishlistId(url1)).toBeUndefined();
      expect(client.utils.extractWishlistId(url2)).toBeUndefined();
    });

    it('末尾にクエリ/パラメータやフラグメントが付いていても抽出できるか？', () => {
      const url1 = 'https://accounts.booth.pm/wish_lists/8OVTLANn?ref=abc';
      const url2 = 'https://booth.pm/wish_list_names/Z1x2Y3aB#top';
      expect(client.utils.extractWishlistId(url1)).toBe('8OVTLANn');
      expect(client.utils.extractWishlistId(url2)).toBe('Z1x2Y3aB');
    });
  });
});

function isObject(value: unknown): boolean {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) return false;
  return true;
}
