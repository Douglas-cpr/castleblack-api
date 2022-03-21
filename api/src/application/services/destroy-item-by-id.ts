import { DestroyItemById } from '@/domain/usecases'
import { DestroyItemByIdRepository } from '../contracts'
import { ItemModel } from '../models'

export class DestroyItemByService implements DestroyItemById {
  constructor(
    private readonly destroyItemByIdRepository: DestroyItemByIdRepository
  ) {}

  async destroy(itemId: string): Promise<ItemModel> {
    const destroyedItem = await this.destroyItemByIdRepository.destroy(itemId)
    return destroyedItem
  }
}
