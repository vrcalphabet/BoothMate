import {
  AgeRestriction,
  BoothEvent,
  Category,
  ItemType,
  SortOrder,
  SubCategory,
} from '../..'

export interface NSearchFilter {
  page: number
  query: string
  exclude_query: string[]
  tags: string[]
  category?: Category | SubCategory
  event?: BoothEvent | string
  item_type: ItemType
  age_restriction: AgeRestriction
  include_unavailable: boolean
  min_price: number
  max_price?: number
  sort: SortOrder
}
