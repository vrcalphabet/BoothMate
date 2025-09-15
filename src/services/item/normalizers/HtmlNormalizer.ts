import { CommonHtmlNormalizer } from '@/services/common';
import { LinkClassifier } from '@/services/utils';
import { BoothEvent, Item, ItemContent, ItemWithContents, SearchResult } from '@/types';
import { BWishlistCounts } from '@/types/booth-api';
import { EItemContent, EItemContents, ESearchResult } from '@/types/extracted';

export class HtmlNormalizer {
  private constructor() {}

  static search(
    searchResult: ESearchResult,
    wishlistCounts: BWishlistCounts,
  ): SearchResult {
    const total = Number(searchResult.total_items.match(/\d+/)![0]);

    return {
      total_items: total,
      current_page: Number(searchResult.current_page),
      total_pages: Math.ceil(total / 60),
      items: CommonHtmlNormalizer.items(searchResult.items, wishlistCounts),
    };
  }

  static get(item: Item, contents: EItemContents): ItemWithContents {
    return {
      ...item,
      event:
        contents.event_url ?
          {
            id: contents.event_url.match(/\/events\/([\w-]+)/)![1] as BoothEvent,
            name: contents.event_name!,
          }
        : undefined,
      contents: this.get_contents(contents.contents),
    };
  }

  private static get_contents(contents: EItemContent[]): ItemContent[] {
    return contents.map<ItemContent>((content) => {
      if (content.is_paragraph) {
        return {
          is_paragraph: true,
          title: content.title,
          text: content.text,
        };
      } else {
        return {
          is_paragraph: false,
          embed: LinkClassifier.classifyEmbed(content.text),
        };
      }
    });
  }
}
