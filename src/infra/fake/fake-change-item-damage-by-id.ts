import { ChangeItemDamageByIdRepository } from '@/application/contracts'
import { ItemModel } from '@/application/models'
import { ChangeItemDamageByIdParams } from '@/domain/usecases'
import { items, changeItemDamage } from '@/infra/data-sources'

export class FakeChangeItemDamageByIdRepository
  implements ChangeItemDamageByIdRepository
{
  async change({
    itemId,
    damage
  }: ChangeItemDamageByIdParams): Promise<ItemModel> {
    changeItemDamage(itemId, damage)
    const changedItem = items.find((item) => item.id === itemId)
    return changedItem
  }
}
