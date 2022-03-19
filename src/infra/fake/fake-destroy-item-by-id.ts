import { DestroyItemByIdRepository } from '@/application/contracts'
import { ItemModel } from '@/application/models'
import { items, destroyItem } from '@/infra/data-sources'

export class FakeDestroyItemById implements DestroyItemByIdRepository {
  async destroy(itemId: string): Promise<ItemModel> {
    const destroyedItem = items.find((item) => item.id == itemId)
    destroyItem(itemId)
    return destroyedItem
  }
}
