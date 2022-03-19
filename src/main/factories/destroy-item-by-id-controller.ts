import { DestroyItemByService } from '@/application/services'
import { FakeDestroyItemByIdRepository } from '@/infra/fake'
import {
  DestroyItemByIdController,
  DestroyItemByIdParams
} from '@/presentation/controllers'
import { makeDestroyItemByIdValidation } from '@/main/factories'
import { Controller } from '@/presentation/contracts'

export const makeDestroyItemByIdController =
  (): Controller<DestroyItemByIdParams> => {
    const repo = new FakeDestroyItemByIdRepository()
    const service = new DestroyItemByService(repo)
    return new DestroyItemByIdController(
      makeDestroyItemByIdValidation(),
      service
    )
  }
