import { AddItem } from '@/domain/usecases'
import { AddItemRepository } from '@/application/contracts'
import { Item } from '@/domain/entities'
import { ItemModel } from '@/application/models'

export class AddItemService implements AddItem {
  constructor(private readonly addItemRepository: AddItemRepository) {}

  async add(item: Item): Promise<ItemModel> {
    const createdItem = await this.addItemRepository.add(item)
    return createdItem
  }
}
