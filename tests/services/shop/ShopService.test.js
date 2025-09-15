"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BoothMate_1 = require("@/BoothMate");
require("dotenv/config");
if (!process.env.SESSION_TOKEN || !process.env.CSRF_TOKEN) {
    throw new Error('.envにSESSION_TOKENとCSRF_TOKENを設定してください');
}
const client = new BoothMate_1.BoothMate(process.env.SESSION_TOKEN, process.env.CSRF_TOKEN, true);
describe('BoothMate.shop', () => {
    describe('BoothMate.shop.getShop', () => {
        it('有効なショップのサブドメインでショップ情報が返るか？', async () => {
            const result = await client.shop.get(global.SHOP_SUBDOMAIN);
            expect(result).toBeDefined();
            expect(result?.subdomain).toBe(global.SHOP_SUBDOMAIN);
        });
        it('存在しないショップのサブドメインでundefinedが返るか？', async () => {
            const result = await client.shop.get(global.NON_EXISTENT_SHOP_SUBDOMAIN);
            expect(result).toBeUndefined();
        });
        it('無効なショップのサブドメインでundefinedが返るか？', async () => {
            const result = await client.shop.get('invalid_subdomain!');
            expect(result).toBeUndefined();
        });
    });
    describe('BoothMate.shop.getShopItems', () => {
        it('2ページ以上ある有効なショップのサブドメインでショップアイテム一覧の1ページ目が返るか？', async () => {
            const result = await client.shop.getItems(global.SHOP_SUBDOMAIN);
            expect(result).toBeDefined();
            expect(Array.isArray(result?.items)).toBe(true);
        });
        it('2ページ以上ある有効なショップのサブドメインでショップアイテム一覧の2ページ目が返るか？', async () => {
            const result = await client.shop.getItems(global.SHOP_SUBDOMAIN, 2);
            expect(result).toBeDefined();
            expect(Array.isArray(result?.items)).toBe(true);
        });
        it('1ページしかないショップで1ページ目が返り2ページ目は空の配列か？', async () => {
            const page1 = await client.shop.getItems(global.ONE_PAGE_SHOP_SUBDOMAIN);
            const page2 = await client.shop.getItems(global.ONE_PAGE_SHOP_SUBDOMAIN, 2);
            expect(page1).toBeDefined();
            expect(Array.isArray(page1?.items)).toBe(true);
            expect(Array.isArray(page2?.items)).toBe(true);
        });
        it('商品を公開していないショップで空の配列が返るか？', async () => {
            const result = await client.shop.getItems(global.NO_ITEMS_SHOP_SUBDOMAIN);
            expect(result).toBeDefined();
            expect(Array.isArray(result?.items)).toBe(true);
            expect(result?.items.length).toBe(0);
        });
        it('ページ省略時とpage=1指定時の結果が同値か？', async () => {
            const implicit = await client.shop.getItems(global.SHOP_SUBDOMAIN);
            const explicit = await client.shop.getItems(global.SHOP_SUBDOMAIN, 1);
            expect(implicit).toBeDefined();
            expect(explicit).toBeDefined();
            expect(implicit?.items.length).toBe(explicit?.items.length);
        });
        it('存在しないページ番号で空の配列が返るか？', async () => {
            const result = await client.shop.getItems(global.SHOP_SUBDOMAIN, 999);
            expect(Array.isArray(result?.items)).toBe(true);
        });
        it('存在しないショップのサブドメインでundefinedが返るか？', async () => {
            const result = await client.shop.getItems(global.NON_EXISTENT_SHOP_SUBDOMAIN);
            expect(result).toBeUndefined();
        });
        it('無効なショップのサブドメインでundefinedが返るか？', async () => {
            const result = await client.shop.getItems('invalid_subdomain!');
            expect(result).toBeUndefined();
        });
    });
    describe('BoothMate.shop.getShopItemList', () => {
        it('有効なショップのサブドメインとアイテムリストIDでアイテムリストが返るか？', async () => {
            const result = await client.shop.getItemList(global.SHOP_SUBDOMAIN, global.ITEM_LIST_ID);
            expect(result).toBeDefined();
            expect(Array.isArray(result?.items)).toBe(true);
        });
        it('有効なショップのサブドメインとアイテムリストIDで2ページ目が返るか？', async () => {
            const result = await client.shop.getItemList(global.SHOP_SUBDOMAIN, global.ITEM_LIST_ID, 2);
            expect(result).toBeDefined();
            expect(Array.isArray(result?.items)).toBe(true);
        });
        it('ページ省略時とpage=1指定時の結果が同値か？', async () => {
            const implicit = await client.shop.getItemList(global.SHOP_SUBDOMAIN, global.ITEM_LIST_ID);
            const explicit = await client.shop.getItemList(global.SHOP_SUBDOMAIN, global.ITEM_LIST_ID, 1);
            expect(implicit).toBeDefined();
            expect(explicit).toBeDefined();
            expect(implicit?.items.length).toBe(explicit?.items.length);
        });
        it('存在しないページ番号で空の配列が返るか？', async () => {
            const result = await client.shop.getItemList(global.SHOP_SUBDOMAIN, global.ITEM_LIST_ID, 999);
            expect(Array.isArray(result?.items)).toBe(true);
        });
        it('存在しないショップのサブドメインでundefinedが返るか？', async () => {
            const result = await client.shop.getItemList(global.NON_EXISTENT_SHOP_SUBDOMAIN, global.ITEM_LIST_ID);
            expect(result).toBeUndefined();
        });
        it('無効なショップのサブドメインでundefinedが返るか？', async () => {
            const result = await client.shop.getItemList('invalid_subdomain!', global.ITEM_LIST_ID);
            expect(result).toBeUndefined();
        });
        it('存在しないアイテムリストIDでundefinedが返るか？', async () => {
            const result = await client.shop.getItemList(global.SHOP_SUBDOMAIN, 'AAAAAAAA');
            expect(result).toBeUndefined();
        });
        it('無効なアイテムリストIDでundefinedが返るか？', async () => {
            const result = await client.shop.getItemList(global.SHOP_SUBDOMAIN, 'invalid_item_list_id!');
            expect(result).toBeUndefined();
        });
    });
});
//# sourceMappingURL=ShopService.test.js.map