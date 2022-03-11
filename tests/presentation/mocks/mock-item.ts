import { ItemModel } from '@/application/models'
import { Item } from '@/domain/entities'
import { AddItem, LoadItems } from '@/domain/usecases'
import { mockItemsModel } from '@/tests/domain/mocks/mock-item'

export class LoadItemsSpy implements LoadItems {
  result: ItemModel[]

  async load(): Promise<ItemModel[]> {
    this.result = mockItemsModel()
    return this.result
  }
}
export class AddItemSpy implements AddItem {
  params: Item

  async add(params: Item): Promise<ItemModel> {
    return {
      id: 'any_id',
      ...params,
      createdAt: new Date()
    }
  }
}
