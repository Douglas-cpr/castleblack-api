import {
  ArmACharacterWithAnItem,
  ArmACharacterWithAnItemParams
} from '@/domain/usecases'
import { Validation } from '@/presentation/contracts'
import { badRequest, ok, serverError } from '@/presentation/utils'

export class ArmACharacterWithAnItemController {
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
      return ok(character)
    } catch (e) {
      return serverError(e)
    }
  }
}
