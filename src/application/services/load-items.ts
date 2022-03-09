import { LoadItems } from '@/domain/usecases'
import { LoadItemsRepository } from '@/application/contracts'
import { ItemModel } from '../models'

export class LoadItemsService implements LoadItems {
  constructor(private readonly loadItemsRepository: LoadItemsRepository) {}

  async load(): Promise<ItemModel[]> {
    const items = await this.loadItemsRepository.load()
    return items
  }
}
