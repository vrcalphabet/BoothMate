import { Category, ItemType, SubCategory } from '..';

export interface BWishlistCounts {
  item_ids: number[];
  wishlists_counts: {
    [wishlistId: string]: number;
  };
}

export interface BItemSummary {
  category: {
    name: {
      en: string;
      ja: SubCategory;
    };
    url: string;
  };
  event: {
    name: string;
    url: string;
  } | null;
  id: number;
  is_adult: boolean;
  is_end_of_sale: boolean;
  is_placeholder: boolean;
  is_sold_out: boolean;
  is_vrchat: boolean;
  minimum_stock: 1 | null;
  music: {
    full_url: string;
    short_url: string;
  } | null;
  name: string;
  price: string;
  shop: Omit<BItemShop, 'subdomain'>;
  shop_item_url: string;
  thumbnail_image_urls: string[];
  tracking_data: {
    product_brand: string;
    product_category: number;
    product_event: string | null;
    product_id: number;
    product_name: string;
    product_price: number;
    tracking: string;
  };
  url: string;
  wish_list_url: string;
}

export interface BItem {
  description: string;
  factory_description: string | null;
  id: number;
  is_adult: boolean;
  is_buyee_possible: boolean;
  is_end_of_sale: boolean;
  is_placeholder: boolean;
  is_sold_out: boolean;
  name: string;
  published_at: string | null;
  price: string;
  purchase_limit: number | null;
  shipping_info: string;
  small_stock: 1 | null;
  url: string;
  wish_list_url: string;
  wish_lists_count: number;
  wished: boolean;
  buyee_variations: []; // FIXME: 型不足，ただ実装に影響はない模様
  category: {
    id: number;
    name: SubCategory;
    parent: {
      name: Category;
      url: string;
    };
    url: string;
  };
  embeds: string[];
  images: BItemImages[];
  order: {
    purchased_at: string;
    url: string;
  } | null;
  gift: {
    purchased_at: string;
    url: string;
  } | null;
  report_url: string;
  share: {
    hashtags: string[];
    text: string;
  };
  shop: BItemShop;
  sound: BItemSound | null;
  tags: {
    name: string;
    url: string;
  }[];
  tag_banners: {
    image_url: string | null;
    name: string;
    url: string;
  }[];
  tag_conbination: {
    category: string;
    tag: string;
    url: string;
  } | null;
  tracks:
    | {
        album_artist: string;
        artist: string;
        title: string;
        track_number: number;
      }[][]
    | null;
  variations: BItemVariation[];
}

export interface BItemImages {
  caption: string | null;
  original: string;
  resized: string;
}

export interface BItemShop {
  name: string;
  subdomain: string;
  thumbnail_url: string;
  url: string;
  verified: boolean;
}

export interface BItemSound {
  full_url: string;
  short_url: string;
}

export interface BItemVariation {
  buyee_html: string | null;
  downloadable: BItemDownloadable | null;
  factory_image_url: string | null;
  has_download_code: boolean;
  id: number;
  is_ansin_booth_package: boolean;
  is_empty_allocatable_stock_with_preorder: boolean;
  is_empty_stock: boolean;
  is_factory_item: boolean;
  is_mailbin: boolean;
  is_waiting_on_arrival: boolean;
  name: string | null;
  order_url: string | null;
  price: number;
  small_stock: 1 | null;
  status: string;
  type: ItemType;
}

export interface BItemDownloadable {
  musics: {
    tracks: {
      artist: string;
      title: string;
      track_number: number;
      optional_files: {
        extension: string;
        url: string;
      }[];
    }[];
  }[];
  no_musics: {
    file_name: string;
    file_extension: string;
    file_size: string;
    name: string;
    url: string;
  }[];
}

export interface BWishlistName {
  code: string;
  name: string;
}

export interface BItemInWishlist {
  is_item_in_wish_list_name: boolean;
  is_limit_reached: boolean;
  wish_list_name_code: string;
  wish_list_name_name: string;
}

export interface BWishlist {
  items: BItemSummary[];
  pagination: {
    current_page: number;
    limit_value: number;
    next_page: number | null;
    prev_page: number | null;
    total_count: number;
    total_pages: number;
  };
}

export interface BWishlistMetadata extends BWishlistName {
  description: string;
  public_url: string;
  visible: boolean;
}

export interface BNotifications {
  read: BNotification[];
  unread: BNotification[];
}

export interface BNotification {
  activityType: 'message.create' | 'reaction.create';
  date: string;
  from: 'shop' | 'user';
  name: string;
  url: string;
}
