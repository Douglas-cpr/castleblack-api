import { Item } from '@/domain/entities/item'

export type Character = {
  name: string
  age: number
  health: number
  weapon: Item
  bag: Item[]
}
