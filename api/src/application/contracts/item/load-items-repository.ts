import { ItemModel } from '@/application/models'

export interface LoadItemsRepository {
  load(): Promise<ItemModel[]>
}
