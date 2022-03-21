import {
  ChangeItemDamageById,
  ChangeItemDamageByIdParams
} from '@/domain/usecases'
import { ItemModel } from '@/application/models'
import { ChangeItemDamageByIdRepository } from '@/application/contracts'

export class ChangeItemDamageByIdService implements ChangeItemDamageById {
  constructor(
    private readonly changeItemDamageByIdRepository: ChangeItemDamageByIdRepository
  ) {}

  async change(params: ChangeItemDamageByIdParams): Promise<ItemModel> {
    const changedItem = await this.changeItemDamageByIdRepository.change(params)
    return changedItem
  }
}
