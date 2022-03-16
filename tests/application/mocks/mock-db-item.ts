import {
  AddItemRepository,
  LoadItemByIdRepository
} from '@/application/contracts'
import { Item } from '@/domain/entities'
import { ItemModel } from '@/application/models'

import faker from 'faker'

export class AddItemRepositorySpy implements AddItemRepository {
  public addItemCalledWith: Item

  public async add(item: Item): Promise<ItemModel> {
    this.addItemCalledWith = item

    const addItemReturnValue: ItemModel = {
      id: faker.datatype.uuid(),
      ...this.addItemCalledWith,
      createdAt: new Date()
    }

    return addItemReturnValue
  }
}

export class LoadItemByIdRepositorySpy implements LoadItemByIdRepository {
  public id: string

  async load(id: string): Promise<ItemModel> {
    this.id = id

    const getItemByIdReturnValue: ItemModel = {
      id,
      description: faker.random.word(),
      damage: faker.datatype.number({ min: 1 }),
      createdAt: new Date()
    }

    return getItemByIdReturnValue
  }
}
