import { ItemModel } from '@/application/models'

export interface LoadItemByIdRepository {
  load(id: string): Promise<ItemModel>
}
