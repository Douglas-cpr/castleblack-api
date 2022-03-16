import { ItemModel } from '@/application/models'
import { Item } from '@/domain/entities'
import { AddItem, LoadItemById, LoadItems } from '@/domain/usecases'
import { mockItemsModel } from '@/tests/domain/mocks'

import faker from 'faker'

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

export class LoadItemByIdSpy implements LoadItemById {
  params: string

  async load(params: string): Promise<ItemModel> {
    return {
      id: params,
      damage: faker.datatype.number({ min: 1 }),
      description: faker.random.word(),
      createdAt: new Date()
    }
  }
}
