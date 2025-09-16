import { CommonJsonNormalizer } from '@/services/common';
import { FileSizeConverter, LinkClassifier } from '@/utils';
import {
  AudioPreview,
  Embed,
  ImageInfo,
  ImageInfoWithCaption,
  Item,
  ItemFileInfo,
  ItemTrackInfoWithFiles,
  ItemVariation,
} from '@/types';
import { BItem, BItemDownloadable, BItemImages, BItemVariation } from '@/types/booth-api';

export class JsonNormalizer {
  private constructor() {}

  static thumbnails(thumbnails: string[]): ImageInfo[] {
    if (thumbnails.length === 0 || thumbnails[0].includes('_placeholder_')) {
      return [];
    }

    return thumbnails.map<ImageInfo>((thumbnail) => {
      const imageId = thumbnail.match(/\/([\w-]+\/i\/\d+\/[\w-]+)/)![1];

      return {
        original: `https://booth.pximg.net/${imageId}.png`,
        resized: thumbnail,
      };
    });
  }

  static thumbnailsWithCaption(thumbnails: BItemImages[]): ImageInfoWithCaption[] {
    return thumbnails.map<ImageInfoWithCaption>((thumbnail) => {
      return {
        original: thumbnail.original,
        resized: thumbnail.resized,
        caption: thumbnail.caption || undefined,
      };
    });
  }

  static get(item: BItem): Item {
    return {
      id: item.id,
      url: `https://booth.pm/ja/items/${item.id}`,
      name: item.name,
      thumbnails: this.thumbnailsWithCaption(item.images),
      category: item.category.parent.name,
      subcategory: item.category.name,
      is_vrchat: item.tags.some((tag) => tag.name === 'VRChat'),
      is_adult: item.is_adult,
      ...this.get_price(item.variations),
      wishlist_count: item.wish_lists_count,
      wished: item.wished,
      stock: this.get_stock(item.variations),
      is_discontinued: item.is_end_of_sale,
      preview: this.get_preview(item.sound),
      shop: CommonJsonNormalizer.itemShop(item.shop),
      description: item.description,
      visible: !item.is_placeholder,
      published_at: item.published_at ?? undefined,
      embeds: this.get_embeds(item.embeds),
      tags: item.tags.map((tag) => tag.name),
      album: this.get_album(item.tracks),
      variations: this.get_variations(item.variations),
    };
  }

  private static get_price(
    variations: BItem['variations'],
  ): Pick<Item, 'min_price' | 'has_variations'> {
    const prices = variations.map((variation) => variation.price);
    const hasNonZeroPrice = prices.some((price) => price > 0);

    let minPrice: number;
    if (hasNonZeroPrice) {
      minPrice = prices
        .filter((price) => price > 0)
        .reduce((min, price) => {
          return Math.min(min, price);
        }, Infinity);
    } else {
      minPrice = 0;
    }

    return {
      min_price: minPrice,
      has_variations: [...new Set(prices)].length > 1,
    };
  }

  private static get_stock(variations: BItem['variations']): number | undefined {
    const stocks = variations
      .map((variation) =>
        variation.small_stock === 1 ? 1
        : variation.is_empty_stock ? 0
        : undefined,
      )
      .filter((stock) => stock !== undefined);

    if (stocks.length === 0) return undefined;
    return Math.max(...stocks);
  }

  private static get_preview(music: BItem['sound'] | null): AudioPreview | undefined {
    if (!music) return undefined;

    return {
      full: music.full_url,
      short: music.short_url,
    };
  }

  private static get_embeds(embeds: string[]): Embed[] {
    return embeds.map<Embed>((embed) => LinkClassifier.classifyEmbed(embed));
  }

  private static get_album(tracks: BItem['tracks']): Item['album'] {
    if (!tracks) return undefined;

    const albumArtist = tracks[0][0].album_artist;
    const trackInfo = tracks.map((disc) => {
      return disc.map((track) => ({
        artist: track.artist,
        title: track.title,
        track_number: track.track_number,
      }));
    });

    return {
      artist: albumArtist,
      discs: trackInfo,
    };
  }

  private static get_variations(variations: BItemVariation[]): ItemVariation[] {
    return variations.map<ItemVariation>((variation) => {
      return {
        type: variation.type,
        id: variation.id,
        name: variation.name ?? undefined,
        price: variation.price,
        order_url: variation.order_url ?? undefined,
        stock:
          variation.small_stock === 1 ? 1
          : variation.is_empty_stock ? 0
          : undefined,
        downloadable: this.get_downloadable(variation.downloadable ?? undefined),
      } satisfies ItemVariation;
    });
  }

  private static get_downloadable(downloadable?: BItemDownloadable): ItemFileInfo[] {
    if (!downloadable) return [];

    const fileInfos: ItemFileInfo[] = [];

    downloadable.musics.forEach((disc) => {
      const tracks = disc.tracks.map<ItemTrackInfoWithFiles>((track) => {
        return {
          artist: track.artist,
          title: track.title,
          track_number: track.track_number,
          files: {
            flac: track.optional_files[0].url,
            m4a: track.optional_files[1].url,
            mp3: track.optional_files[2].url,
          },
        };
      });

      fileInfos.push({
        is_music: true,
        tracks: tracks,
      });
    });

    downloadable.no_musics.forEach((file) => {
      fileInfos.push({
        is_music: false,
        file_name: file.name,
        file_extension: file.file_extension,
        file_size: FileSizeConverter.toBytes(file.file_size),
        url: file.url,
      });
    });

    return fileInfos;
  }
}
