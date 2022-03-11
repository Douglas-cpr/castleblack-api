import { AddItemRepository } from '@/application/contracts'
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
