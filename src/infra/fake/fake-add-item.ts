import { AddItemRepository } from '@/application/contracts'
import { ItemModel } from '@/application/models'
import { Item } from '@/domain/entities'
import { items } from '@/infra/data-sources'

import { v4 as uuidv4 } from 'uuid'

export class FakeAddItemRepository implements AddItemRepository {
  async add(item: Item): Promise<ItemModel> {
    console.log(item)
    const newItemId = uuidv4()
    const newItem: ItemModel = {
      id: newItemId,
      ...item,
      createdAt: new Date()
    }

    items.push(newItem)

    return newItem
  }
}
