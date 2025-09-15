import { BoothMate } from '@/BoothMate';
import {
  AgeRestriction,
  BoothEvent,
  Category,
  Item,
  ItemSummary,
  ItemType,
  ItemWithContents,
  SearchResult,
  SortOrder,
} from '@/types';
import 'dotenv/config';

const client = new BoothMate(process.env.SESSION_TOKEN!, process.env.CSRF_TOKEN!);

// すべてのサンプルにおいて，変数の型は省略可能です。必要に応じて指定してください。

(async () => {
  // 商品の一覧取得(デフォルト人気順)
  let searchResult: SearchResult;
  searchResult = await client.item.search();

  // 検索キーワードと並び替えを指定して商品一覧を取得(新着順)
  searchResult = await client.item.search('vr', { sort: SortOrder.NEW });
  searchResult = await client.item.search({ query: 'vr', sort: SortOrder.NEW });

  // すべてのフィルターを指定して商品一覧を取得
  searchResult = await client.item.search({
    page: 1, // ページ番号 (1ページ目)
    query: 'vrchat', // 検索キーワード
    // query: ['vrchat', 'blender'], // 検索キーワード(配列)
    exclude_query: '共通', // 除外キーワード
    // exclude_query: ['共通', 'サンプル'], // 除外キーワード(配列)
    category: Category.THREE_D_MODEL, // カテゴリ (3Dモデル)
    // category: SubCategory.THREE_D_CHARACTER, // サブカテゴリ (3Dキャラクター)
    event: BoothEvent.vrcreative, // イベント (VRCくりえいてぃ部)
    item_type: ItemType.DIGITAL, // 商品の種類 (ダウンロード商品)
    age_restriction: AgeRestriction.GENERAL, // 年齢制限 (全年齢)
    include_unavailable: true, // 在庫なし・販売終了を含む
    min_price: 100, // 最小価格 (100円)
    max_price: 5500, // 最大価格 (5500円)
    sort: SortOrder.LIKES, // 並び替え (スキ！順)
  });

  // 商品一覧の1番目の商品を取得
  searchResult = await client.item.search();
  const firstItem: ItemSummary = searchResult.items[0];

  // 商品が存在するか確認
  const existsItem: boolean = await client.item.exists(firstItem.id);

  // 商品の詳細情報を取得(イベントや段落の内容は含まれません)
  const itemDetail: Item | undefined = await client.item.get(firstItem.id);

  // イベントや段落の内容を含む，詳細な商品情報を取得
  const itemFullDetail: ItemWithContents | undefined = await client.item.get(
    firstItem.id,
    true,
  );
})();
