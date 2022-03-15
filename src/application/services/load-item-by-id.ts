import { LoadItemById } from '@/domain/usecases'
import { LoadItemByIdRepository } from '@/application/contracts'
import { ItemModel } from '@/application/models'

export class LoadItemByIdService implements LoadItemById {
  constructor(
    private readonly loadItemByIdRepository: LoadItemByIdRepository
  ) {}

  async load(id: string): Promise<ItemModel> {
    const item = await this.loadItemByIdRepository.load(id)
    return item
  }
}
