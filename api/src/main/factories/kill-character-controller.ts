import { KillCharacterService } from '@/application/services'
import { FakeKillCharacterRepository } from '@/infra/fake/fake-kill-character'
import { Controller } from '@/presentation/contracts'
import {
  KillCharacterController,
  KillCharacterParams
} from '@/presentation/controllers'
import { makeKillCharacterValidation } from '@/main/factories'

export const makeKillCharacterController =
  (): Controller<KillCharacterParams> => {
    const repo = new FakeKillCharacterRepository()
    const service = new KillCharacterService(repo)
    return new KillCharacterController(makeKillCharacterValidation(), service)
  }
