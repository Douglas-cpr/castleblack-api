import { LoadItemByIdRepository } from '@/application/contracts'
import { ItemModel } from '@/application/models'
import { items } from '@/infra/data-sources'

export class FakeLoadItemById implements LoadItemByIdRepository {
  async load(id: string): Promise<ItemModel> {
    const item = items.find((item) => item.id == id)
    return item
  }
}
