import { KillCharacterService } from '@/application/services'
import { Controller, Validation } from '@/presentation/contracts'
import { NotFoundError } from '@/presentation/errors'
import { badRequest, notFound, serverError, ok } from '@/presentation/utils'

export type KillCharacterParams = {
  characterId: string
}

export class KillCharacterController
  implements Controller<KillCharacterParams>
{
  constructor(
    private readonly validation: Validation,
    private readonly killCharacterService: KillCharacterService
  ) {}

  async handle(params: KillCharacterParams) {
    try {
      const error = this.validation.validate(params)

      if (error) {
        badRequest(error)
      }

      const killedCharacter = await this.killCharacterService.kill(
        params.characterId
      )

      if (!killedCharacter) {
        return notFound(new NotFoundError())
      }

      return ok(killedCharacter)
    } catch (e) {
      return serverError(e)
    }
  }
}
