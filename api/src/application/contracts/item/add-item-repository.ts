import { Item } from '@/domain/entities'
import { ItemModel } from '@/application/models'

export interface AddItemRepository {
  add(item: Item): Promise<ItemModel>
}
