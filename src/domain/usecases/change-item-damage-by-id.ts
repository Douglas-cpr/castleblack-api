import { Item } from '@/domain/entities'

export type ChangeItemDamageByIdParams = {
  itemId: string
  damage: number
}
export interface ChangeItemDamageById {
  change: ({ itemId, damage }: ChangeItemDamageByIdParams) => Promise<Item>
}
