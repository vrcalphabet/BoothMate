import { AgeRestriction, ItemType, SortOrder } from '@/types/enums'
import { type SearchFilter } from '@/types/interfaces'
import { type NSearchFilter } from '@/types/internal/normalized'

class SearchFilterNormalizer {
  static normalize(query: string, filter: SearchFilter): NSearchFilter {
    return {
      page: Math.min(filter.page ?? 1, 3333),
      query: this.stringify(query) ?? '',
      query_any: filter.query_any ?? [],
      exclude_query: this.toArray(filter.exclude_query),
      tags: this.toArray(filter.tags),
      category: filter.category,
      event: filter.event,
      item_type: filter.item_type ?? ItemType.UNSPECIFIED,
      age_restriction: filter.age_restriction ?? AgeRestriction.GENERAL,
      include_unavailable: filter.include_unavailable ?? true,
      min_price: filter.min_price ?? 0,
      max_price: filter.max_price,
      sort: filter.sort ?? SortOrder.POPULARITY,
    }
  }

  private static stringify(value?: string | string[]): string | void {
    return Array.isArray(value) ? value.join(' ') : value
  }

  private static toArray(value?: string | string[]): string[] {
    return (
      Array.isArray(value) ? value
      : value ? [value]
      : []
    )
  }
}

export { SearchFilterNormalizer }
