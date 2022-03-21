import { ItemModel } from '@/application/models'
import { AddItemService } from '@/application/services'
import { FakeAddItemRepository } from '@/infra/fake'
import { Controller } from '@/presentation/contracts'
import { AddItemController } from '@/presentation/controllers'
import { makeAddItemValidation } from '@/main/factories'

export const makeAddItemController = (): Controller<ItemModel> => {
  const repo = new FakeAddItemRepository()
  const service = new AddItemService(repo)
  return new AddItemController(makeAddItemValidation(), service)
}
