import { DestroyItemByIdRepository } from '@/application/contracts'
import { ItemModel } from '@/application/models'
import { items, removeItem } from '@/infra/data-sources'

export class FakeDestroyItemByIdRepository
  implements DestroyItemByIdRepository
{
  async destroy(itemId: string): Promise<ItemModel> {
    const destroyedItem = items.find((item) => item.id == itemId)
    removeItem(itemId)
    return destroyedItem
  }
}
