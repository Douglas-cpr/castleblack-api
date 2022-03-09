import { ItemModel } from '@/application/models'

export const items: ItemModel[] = [
  { id: '1', description: 'spoon', damage: -1, createdAt: new Date() },
  { id: '2', description: 'knife', damage: -10, createdAt: new Date() },
  { id: '3', description: 'sword', damage: -20, createdAt: new Date() },
  { id: '4', description: 'potion', damage: +20, createdAt: new Date() }
]
