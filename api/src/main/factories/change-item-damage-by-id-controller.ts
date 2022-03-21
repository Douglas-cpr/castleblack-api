import { ChangeItemDamageByIdService } from '@/application/services'
import { ChangeItemDamageByIdParams } from '@/domain/usecases'
import { FakeChangeItemDamageByIdRepository } from '@/infra/fake'
import { Controller } from '@/presentation/contracts'
import { ChangeItemDamageByIdController } from '@/presentation/controllers'
import { makeChangeItemDamageByIdValidation } from '@/main/factories'

export const makeChangeItemDamageByIdController =
  (): Controller<ChangeItemDamageByIdParams> => {
    const repo = new FakeChangeItemDamageByIdRepository()
    const service = new ChangeItemDamageByIdService(repo)
    return new ChangeItemDamageByIdController(
      makeChangeItemDamageByIdValidation(),
      service
    )
  }
