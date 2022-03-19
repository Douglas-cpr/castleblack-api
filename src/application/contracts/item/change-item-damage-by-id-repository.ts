import { ItemModel } from '@/application/models'
import { ChangeItemDamageByIdParams } from '@/domain/usecases'

export interface ChangeItemDamageByIdRepository {
  change({ itemId, damage }: ChangeItemDamageByIdParams): Promise<ItemModel>
}
