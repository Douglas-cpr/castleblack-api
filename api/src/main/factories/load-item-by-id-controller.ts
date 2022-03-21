import { LoadItemByIdService } from '@/application/services'
import { FakeLoadItemByIdRepository } from '@/infra/fake'
import { Controller } from '@/presentation/contracts'
import {
  LoadItemByIdController,
  LoadItemByIdControllerParams
} from '@/presentation/controllers'
import { makeLoadItemByIdValidation } from '@/main/factories'

export const makeLoadItemByIdController =
  (): Controller<LoadItemByIdControllerParams> => {
    const repo = new FakeLoadItemByIdRepository()
    const service = new LoadItemByIdService(repo)
    return new LoadItemByIdController(makeLoadItemByIdValidation(), service)
  }
