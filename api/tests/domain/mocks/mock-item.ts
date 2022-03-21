import { ItemModel } from '@/application/models'
import { Item } from '@/domain/entities'

import faker from 'faker'

export const mockItemModel = (): ItemModel => ({
  id: faker.datatype.uuid(),
  description: faker.random.word(),
  damage: faker.datatype.number({ min: 1 }),
  createdAt: new Date()
})

export const mockItemsModel = (): ItemModel[] => [
  mockItemModel(),
  mockItemModel()
]

export const mockAddItemParams = (): Item => ({
  description: faker.random.word(),
  damage: faker.datatype.number({ min: 1 })
})
