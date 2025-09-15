export interface EItemsResult {
  current_page: number;
  total_pages: string;
  items: EItemSummary[];
}

export interface ESearchResult extends Omit<EItemsResult, 'total_pages'> {
  total_items: string;
}

export interface EItemSummary {
  id: string;
  title: string;
  thumbnails: string[];
  subcategory: string;
  is_vrchat: boolean;
  is_adult: boolean;
  price: string;
  wishlist_count: number;
  event?: string;
  event_name?: string;
  stock?: string;
  preview?: EAudioPreview;
  shop: EShopSummary;
}

export interface EItemContents {
  event_url?: string;
  event_name?: string;
  contents: EItemContent[];
}

export interface EItemContent {
  is_paragraph: boolean;
  title: string;
  text: string;
}

export interface EAudioPreview {
  short: string;
  full: string;
}

export interface EShopSummary {
  url: string;
  name: string;
  icon_url: string;
  is_verified: boolean;
}

export interface EShop extends EShopSummary {
  nickname: string;
  header_image?: string;
  description: string;
  links: ELink[];
  item_lists: EItemListSummary[];
}

export interface ELink {
  url: string;
  caption?: string;
}

export interface EShopItems extends EItemsResult {}

export interface EItemListSummary {
  url: string;
  name: string;
}

export interface EItemList extends EItemListSummary, EItemsResult {}
