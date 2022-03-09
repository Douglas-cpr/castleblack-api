import { ItemModel } from '@/application/models'
import { AddItemService } from '@/application/services/add-item'
import { FakeAddItemRepository } from '@/infra/fake/fake-add-item'
import { Controller } from '@/presentation/contracts'
import { AddItemController } from '@/presentation/controllers/add-item'
import { makeAddItemValidation } from './add-item-validation'

export const makeAddItemController = (): Controller<ItemModel> => {
  const repo = new FakeAddItemRepository()
  const service = new AddItemService(repo)
  return new AddItemController(makeAddItemValidation(), service)
}
