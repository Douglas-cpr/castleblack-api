import { LoadItemsRepository } from '@/application/contracts'
import { ItemModel } from '@/application/models'
import { items } from '@/infra/data-sources'

export class FakeLoadItemsRepository implements LoadItemsRepository {
  async load(): Promise<ItemModel[]> {
    return items
  }
}
