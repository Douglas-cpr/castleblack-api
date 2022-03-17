import { LoadCharacterByIdService } from '@/application/services'
import { FakeLoadCharacterById } from '@/infra/fake/fake-load-character-by-id'
import {
  LoadCharacterByIdController,
  LoadCharacterByIdParams
} from '@/presentation/controllers/load-character-by-id'
import { makeLoadCharacterByIdValidation } from '@/main/factories'
import { Controller } from '@/presentation/contracts'

export const makeLoadCharacterByIdController =
  (): Controller<LoadCharacterByIdParams> => {
    const validation = makeLoadCharacterByIdValidation()
    const repository = new FakeLoadCharacterById()
    const service = new LoadCharacterByIdService(repository)

    return new LoadCharacterByIdController(validation, service)
  }
