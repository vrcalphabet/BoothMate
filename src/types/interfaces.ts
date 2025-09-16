import {
  AgeRestriction,
  Category,
  ItemType,
  SortOrder,
  SubCategory,
  BoothEvent,
  LinkType,
} from './enums';

/** 商品の検索に使用する検索フィルタ */
export interface SearchFilter {
  /**
   * ページ番号。1から始まり，デフォルトは`1`です。 \
   * Booth側の仕様により3334ページ以降は取得できません。
   */
  page?: number;
  /** 検索キーワード。配列の場合は半角スペース区切りで結合されます。 */
  query?: string | string[];
  /** 除外するキーワード */
  exclude_query?: string | string[];
  /** タグ */
  tags?: string | string[];
  /** カテゴリまたはサブカテゴリ */
  category?: Category | SubCategory;
  /** イベントのID。イベント名ではありません。 */
  event?: BoothEvent;
  /** 物販やダウンロード商品等の商品の種類。デフォルトは`ItemType.UNSPECIFIED`です。 */
  item_type?: ItemType;
  /** 年齢制限。デフォルトは`AgeRestriction.GENERAL`です。 */
  age_restriction?: AgeRestriction;
  /** 在庫なし・販売終了を含むかどうか。デフォルトは`true`です。 */
  include_unavailable?: boolean;
  /** 最小価格。デフォルトは`0`です。 */
  min_price?: number;
  /** 最大価格 */
  max_price?: number;
  /** 商品の並び替え。デフォルトは`SortOrder.POPULARITY`です。 */
  sort?: SortOrder;
}

/** 商品の一覧 */
export interface ItemsResult {
  /** 現在のページ番号 */
  current_page: number;
  /** 合計ページ数 */
  total_pages: number;
  /** 商品のリスト */
  items: ItemSummary[];
}

/** 検索結果 */
export interface SearchResult extends ItemsResult {
  /** 検索フィルタに合致した商品の個数 */
  total_items: number;
}

/** 商品の概要 */
export interface ItemSummary {
  /** 商品ID */
  id: number;
  /** 商品のURL */
  url: string;
  /** 商品名 */
  name: string;
  /** 商品画像のリスト */
  thumbnails: ImageInfo[];
  /** 商品のカテゴリ */
  category: Category;
  /** 商品のサブカテゴリ */
  subcategory: SubCategory;
  /** VRChatのタグがついているか */
  is_vrchat: boolean;
  /** 成人向け商品か */
  is_adult: boolean;
  /** 値段の最小値 */
  min_price: number;
  /** 値段のバリエーションが存在するか */
  has_variations: boolean;
  /** スキ！の数 */
  wishlist_count: number;
  /** スキ！をしているか */
  wished: boolean;
  /** イベント */
  event?: ItemEvent;
  /**
   * 商品の残り在庫(残り1点以下の場合のみ) \
   * バリエーションの中で一番在庫が多い商品の在庫数が表示されます。
   */
  stock?: number;
  /** 販売終了か */
  is_discontinued: boolean;
  /** 試聴用音源 */
  preview?: AudioPreview;
  /** 商品のショップ情報 */
  shop: ShopSummary;
}

/** 商品の詳細情報 */
export interface Item extends Omit<ItemSummary, 'event'> {
  /** 商品の説明 */
  description: string;
  /** 商品が公開されているか */
  visible: boolean;
  /** 商品の公開日時 (ISO 8601) */
  published_at?: string;
  /** 埋め込み要素のリスト */
  embeds: Embed[];
  /** キャプション付き商品画像のリスト */
  thumbnails: ImageInfoWithCaption[];
  /** 商品に付けられているタグのリスト */
  tags: string[];
  /** アルバムの情報 */
  album?: ItemAlbumInfo;
  /** 商品のバリエーション。ダウンロード可能なアルバムは，代わりに`album`から取得できます。 */
  variations: ItemVariation[];
}

/** 段落・イベント等を含めた商品の詳細情報 */
export interface ItemWithContents extends Item {
  /** イベント */
  event?: ItemEvent;
  /** 段落と埋込みコンテンツ */
  contents: ItemContent[];
}

/** 段落と埋め込みコンテンツ */
export type ItemContent =
  | {
      /** 段落かどうか */
      is_paragraph: true;
      /** 段落のタイトル */
      title: string;
      /** 段落の本文 */
      text: string;
    }
  | {
      /** 段落かどうか */
      is_paragraph: false;
      /** 埋め込み要素 */
      embed: Embed;
    };

/** 埋め込み要素の情報 */
export interface Embed {
  /** 埋め込み要素の種類 */
  type: LinkType;
  /** 埋め込み要素のURL */
  url: string;
  /** 埋め込み要素のコード */
  html: string;
}

/** アルバムの情報 */
export interface ItemAlbumInfo {
  /** アーティスト */
  artist: string;
  /** 各ディスクのトラックリスト */
  discs: ItemTrackInfo[][];
}

/** トラックの情報 */
export interface ItemTrackInfo {
  /** トラックのアーティスト */
  artist: string;
  /** トラックのタイトル */
  title: string;
  /** トラック番号 */
  track_number: number;
}

/** トラックの情報とダウンロード可能なファイル */
export interface ItemTrackInfoWithFiles extends ItemTrackInfo {
  /** 無料でダウンロード可能な音声のURL */
  files: {
    /** flac形式のダウンロード可能な音声のURL */
    flac: string;
    /** m4a形式のダウンロード可能な音声のURL */
    m4a: string;
    /** mp3形式のダウンロード可能な音声のURL */
    mp3: string;
  };
}

/** 商品のバリエーション */
export interface ItemVariation {
  /** バリエーションの種類 */
  type: ItemType;
  /** バリエーションのID */
  id: number;
  /**
   * バリエーションの名前
   *
   * `Item.has_variations`が`false`の場合のみ`undefined`になります。
   */
  name?: string;
  /** バリエーションの値段 */
  price: number;
  /** 注文した・ギフトされた商品の確認ページのURL */
  order_url?: string;
  /** 商品の残り在庫(残り1点以下の場合のみ)  */
  stock?: number;
  /** 無料でダウンロード可能なファイルのリスト(アルバムの各ディスクは分割して格納されます)  */
  downloadable: ItemFileInfo[];
}

/** 商品のファイル情報 */
export type ItemFileInfo =
  | {
      /** 音楽かどうか */
      is_music: false;
      /** ファイル名 */
      file_name: string;
      /** ファイルの拡張子 */
      file_extension: string;
      /** ファイルサイズ(バイト単位)  */
      file_size: number;
      /** ファイルのダウンロードURL */
      url: string;
    }
  | {
      /** 音楽かどうか */
      is_music: true;
      /** トラックの情報 */
      tracks: ItemTrackInfoWithFiles[];
    };

/** 画像情報 */
export interface ImageInfo {
  /** オリジナル画像のURL */
  original: string;
  /** 縮小画像のURL */
  resized: string;
}

/** 画像情報とキャプション */
export interface ImageInfoWithCaption extends ImageInfo {
  /** 画像のキャプション */
  caption?: string;
}

/** イベント */
export interface ItemEvent {
  /** イベントのID */
  id: BoothEvent;
  /** イベント名 */
  name: string;
}

/** 試聴用音源 */
export interface AudioPreview {
  /** 15秒バージョンの視聴用音源のURL */
  short: string;
  /** フルバージョンの視聴用音源のURL */
  full: string;
}

/** ショップの概要 */
export interface ShopSummary {
  /** ショップのURL */
  url: string;
  /** ショップのID */
  subdomain: string;
  /** ショップ名 */
  name: string;
  /** ショップのアイコン */
  icon_url: string;
  /** 認証済みかどうか */
  is_verified: boolean;
}

/** ショップの詳細情報 */
export interface Shop extends ShopSummary {
  /** ユーザ名 */
  username: string;
  /** ヘッダー画像 */
  header_image?: string;
  /** ショップの説明 */
  description: string;
  /** ショップに関連するリンク一覧 */
  links: Link[];
  /** 商品リストの一覧 */
  item_lists: ItemListSummary[];
}

export interface ShopItems extends ItemsResult {}

/** リンクのURLと種類 */
export interface Link {
  /** リンクの種類 */
  type: LinkType;
  /** リンクのURL */
  url: string;
  /** リンクの説明 */
  caption?: string;
}

/** 商品リストの概要 */
export interface ItemListSummary {
  /** 商品リストのID */
  id: string;
  /** 商品リストの名前 */
  name: string;
  /** 商品リストの公開URL */
  public_url: string;
}

/** 商品リストの詳細情報 */
export interface ItemList extends ItemsResult, ItemListSummary {}

/** スキリストの概要 */
export interface WishlistSummary {
  /** スキリストのID */
  id: string;
  /** スキリストの名前 */
  name: string;
  /** スキリストの非公開URL */
  url: string;
  /** スキリストの公開URL(公開されているとは限りません)  */
  public_url: string;
}

/** デフォルト・未分類のスキリスト */
export interface WishlistBasic extends ItemsResult {
  /** 商品の個数 */
  total_items: number;
}

/** スキリストの詳細情報 */
export interface Wishlist extends WishlistSummary, WishlistBasic {
  /** スキリストに商品を追加できる残りの個数 */
  remaining_items: number;
  /** スキリストが公開されているか */
  visible: boolean;
  /** スキリストの概要 */
  description: string;
}

/** 通知の情報 */
export interface Notification {
  /**
   * 通知の種類
   * - 'message': メッセージ通知
   * - 'reaction': リアクション通知
   */
  type: 'message' | 'reaction';
  /**
   * 通知の送信元の種類
   * - 'shop': ショップからの通知
   * - 'user': ユーザーからの通知
   */
  from: 'shop' | 'user';
  /** 通知日時 */
  date: string;
  /** 通知元の名前(ショップ名やユーザー名)  */
  name: string;
  /** 通知内容の本文 */
  content: string;
  /** 通知に関連するURL */
  url: string;
  /** 既読かどうか */
  isRead: boolean;
}

export type Notifications = Notification[];
