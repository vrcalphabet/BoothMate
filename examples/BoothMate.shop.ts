import { BoothMate } from '@/BoothMate';
import { ItemList, ItemSummary, Shop, ShopItems } from '@/types';
import 'dotenv/config';

const client = new BoothMate(process.env.SESSION_TOKEN!, process.env.CSRF_TOKEN!);

// すべてのサンプルにおいて，変数の型は省略可能です。必要に応じて指定してください。

(async () => {
  // ショップ情報を取得
  const shop: Shop | undefined = await client.shop.get('alphahub');

  // ショップの商品一覧を取得(1ページ目)
  let shopItems: ShopItems | undefined;
  shopItems = await client.shop.getItems('alphahub');
  shopItems = await client.shop.getItems('alphahub', 1);

  if (shopItems) {
    // 商品一覧の1番目の商品を取得
    const firstItem: ItemSummary = shopItems.items[0];
  }

  // ショップの商品リストを取得(1ページ目)
  let itemList: ItemList | undefined;
  itemList = await client.shop.getItemList('mukumi', '8OVTLANn');
  itemList = await client.shop.getItemList('mukumi', '8OVTLANn', 1);

  if (itemList) {
    // 商品リストの1番目の商品を取得
    const firstItem: ItemSummary = itemList.items[0];
  }
})();
