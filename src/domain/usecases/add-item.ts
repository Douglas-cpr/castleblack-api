import { Item } from '@/domain/entities'

export interface AddItem {
  add: (item: Item) => Promise<Item>
}
