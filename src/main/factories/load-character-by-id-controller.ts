import { LoadCharacterByIdService } from '@/application/services'
import { FakeLoadCharacterByIdRepository } from '@/infra/fake'
import {
  LoadCharacterByIdController,
  LoadCharacterByIdParams
} from '@/presentation/controllers'
import { makeLoadCharacterByIdValidation } from '@/main/factories'
import { Controller } from '@/presentation/contracts'

export const makeLoadCharacterByIdController =
  (): Controller<LoadCharacterByIdParams> => {
    const repository = new FakeLoadCharacterByIdRepository()
    const service = new LoadCharacterByIdService(repository)
    return new LoadCharacterByIdController(
      makeLoadCharacterByIdValidation(),
      service
    )
  }
