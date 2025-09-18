import { BoothMate } from '@/BoothMate';
import 'dotenv/config';
import { WebAppManifest } from 'web-app-manifest';

const client = new BoothMate(process.env.SESSION_TOKEN!, process.env.CSRF_TOKEN!);

// すべてのサンプルにおいて，変数の型は省略可能です。必要に応じて指定してください。

(async () => {
  // Webアプリマニフェストを取得
  const manifest: WebAppManifest = await client.utils.getManifest();

  // セッショントークンの有効性を検証
  const isValidToken: boolean = await client.utils.validateToken();

  // 検索クエリの候補を取得
  const suggestions: string[] = await client.utils.autocomplete('vr');

  // URLから商品IDを抽出
  const itemId: number | undefined = client.utils.extractItemId(
    'https://booth.pm/ja/items/5813187',
  ); // → 5813187

  // URLからショップサブドメインを抽出
  const shopSubdomain: string | undefined = client.utils.extractSubdomain(
    'https://mukumi.booth.pm/items/5813187',
  ); // → 'mukumi'

  // URLからウィッシュリストIDを抽出
  const wishlistId: string | undefined = client.utils.extractWishlistId(
    'https://booth.pm/wish_list_names/pQ9TlbPV',
  ); // → 'pQ9TlbPV'

  // URLからサブドメインと商品リストIDを抽出
  const itemList: [string, string] | undefined = client.utils.extractItemListId(
    'https://mukumi.booth.pm/item_lists/8OVTLANn',
  ); // → ['mukumi', '8OVTLANn']

  // バイト数から人間に読みやすい形式に変換
  const readableSize: string = client.utils.formatFileSize(123456789); // → '117.74 MB'
})();
