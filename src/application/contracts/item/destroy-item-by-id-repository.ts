import { ItemModel } from '@/application/models'

export interface DestroyItemByIdRepository {
  destroy: (itemId: string) => Promise<ItemModel>
}
