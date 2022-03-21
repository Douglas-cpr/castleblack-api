import { Item } from '@/domain/entities'

export interface LoadItems {
  load: () => Promise<Item[]>
}
