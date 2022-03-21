import { Item } from '@/domain/entities'

export interface LoadItemById {
  load: (id: string) => Promise<Item>
}
