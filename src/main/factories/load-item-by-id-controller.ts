import { LoadItemByIdService } from '@/application/services'
import { FakeLoadItemById } from '@/infra/fake/fake-load-item-by-id'
import { Controller } from '@/presentation/contracts'
import {
  LoadItemByIdController,
  LoadItemByIdControllerParams
} from '@/presentation/controllers'
import { makeLoadItemByIdValidation } from '@/main/factories'

export const makeLoadItemByIdController =
  (): Controller<LoadItemByIdControllerParams> => {
    const repo = new FakeLoadItemById()
    const service = new LoadItemByIdService(repo)
    return new LoadItemByIdController(makeLoadItemByIdValidation(), service)
  }
