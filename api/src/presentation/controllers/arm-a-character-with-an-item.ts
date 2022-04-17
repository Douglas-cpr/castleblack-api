import {
  ArmACharacterWithAnItem,
  ArmACharacterWithAnItemParams
} from '@/domain/usecases'
import { Controller, Validation } from '@/presentation/contracts'
import { badRequest, ok, serverError, notFound } from '@/presentation/utils'

export class ArmACharacterWithAnItemController
  implements Controller<ArmACharacterWithAnItemParams>
{
  constructor(
    private readonly validation: Validation,
    private readonly armACharacterWithAnItem: ArmACharacterWithAnItem
  ) {}

  async handle({ characterId, itemId }: ArmACharacterWithAnItemParams) {
    try {
      const error = this.validation.validate({ characterId, itemId })

      if (error) {
        return badRequest(error)
      }

      const character = await this.armACharacterWithAnItem.arm({
        characterId,
        itemId
      })

      if (!character) {
        return notFound()
      }

      return ok(character)
    } catch (e) {
      return serverError(e)
    }
  }
}
