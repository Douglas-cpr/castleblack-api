import { ItemModel } from '@/application/models'

export const items: ItemModel[] = [
  { id: '1', name: 'spoon', damage: -1, createdAt: new Date() },
  { id: '2', name: 'knife', damage: -10, createdAt: new Date() },
  { id: '3', name: 'sword', damage: -20, createdAt: new Date() },
  { id: '4', name: 'potion', damage: +20, createdAt: new Date() }
]
