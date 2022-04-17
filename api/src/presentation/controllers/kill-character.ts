import { KillCharacter } from '@/domain/usecases'
import { Controller, Validation } from '@/presentation/contracts'
import { badRequest, notFound, serverError, ok } from '@/presentation/utils'

export type KillCharacterParams = {
  characterId: string
}

export class KillCharacterController
  implements Controller<KillCharacterParams>
{
  constructor(
    private readonly validation: Validation,
    private readonly killCharacter: KillCharacter
  ) {}

  async handle(params: KillCharacterParams) {
    try {
      const error = this.validation.validate(params)

      if (error) {
        badRequest(error)
      }

      const killedCharacter = await this.killCharacter.kill(params.characterId)

      if (!killedCharacter) {
        return notFound()
      }

      return ok(killedCharacter)
    } catch (e) {
      return serverError(e)
    }
  }
}
