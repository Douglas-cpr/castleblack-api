import type { Item } from '@/domain/entities'

export interface ItemModel extends Item {
  id: string
  createdAt: Date
}
