import { ItemModel } from '@/application/models'
import { Item } from '@/domain/entities'
import {
  AddItem,
  LoadItemById,
  LoadItems,
  DestroyItemById,
  ChangeItemDamageById,
  ChangeItemDamageByIdParams
} from '@/domain/usecases'
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

export class DestroyItemByIdSpy implements DestroyItemById {
  params: string

  async destroy(params: string): Promise<ItemModel> {
    return {
      id: params,
      damage: faker.datatype.number({ min: 1 }),
      description: faker.random.word(),
      createdAt: new Date()
    }
  }
}

export class ChangeItemDamageByIdSpy implements ChangeItemDamageById {
  params: ChangeItemDamageByIdParams

  async change(params: ChangeItemDamageByIdParams): Promise<ItemModel> {
    return {
      id: params.itemId,
      damage: params.damage,
      description: faker.random.word(),
      createdAt: new Date()
    }
  }
}
