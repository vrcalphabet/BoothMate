import { BoothMate } from '@/BoothMate';
import { Wishlist, WishlistBasic, WishlistSummary } from '@/types';
import 'dotenv/config';

const client = new BoothMate(process.env.SESSION_TOKEN!, process.env.CSRF_TOKEN!);

// すべてのサンプルにおいて，変数の型は省略可能です。必要に応じて指定してください。

(async () => {
  // 自分が作成したウィッシュリストの一覧を取得
  const wishlistNames: WishlistSummary[] = await client.wishlist.getNames();
  
  // 特定のウィッシュリストの商品一覧を取得
  const wishlistItems: Wishlist | undefined = await client.wishlist.getItems('pQ9TlbPV');
  
  // デフォルト（すべて）のウィッシュリストの商品一覧を取得
  const defaultItems: WishlistBasic = await client.wishlist.getDefaultItems();
  
  // 未分類のウィッシュリストの商品一覧を取得
  const uncategorizedItems: WishlistBasic = await client.wishlist.getUncategorizedItems();
  
  // 特定のウィッシュリストに商品が含まれているか確認
  const hasItem: boolean = await client.wishlist.hasItem(5813187, 'pQ9TlbPV');
  
  // 特定のウィッシュリストに商品を追加
  await client.wishlist.addItem(5813187, 'pQ9TlbPV');
  await client.wishlist.addItem(5813187, ['pQ9TlbPV', '8LDTYxRJ']);
  
  // 特定のウィッシュリストから商品を削除
  await client.wishlist.removeItem(5813187, 'pQ9TlbPV');
  await client.wishlist.removeItem(5813187, ['pQ9TlbPV', '8LDTYxRJ']);
})();