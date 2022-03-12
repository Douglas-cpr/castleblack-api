import { ArmACharacterWithAnItemRepository } from '@/application/contracts'
import { CharacterModel } from '@/application/models'
import { ArmACharacterWithAnItemParams } from '@/domain/usecases'
import { characters, items } from '@/infra/data-sources'
import { NotFound } from '@/infra/errors'

export class FakeArmACharacterWithAnItemRepository
  implements ArmACharacterWithAnItemRepository
{
  async arm({
    characterId,
    itemId
  }: ArmACharacterWithAnItemParams): Promise<CharacterModel> {
    const character = characters.find(
      (character) => character.id == characterId
    )
    const item = items.find((item) => item.id == itemId)

    if (!character) {
      throw new NotFound('character', characterId)
    }

    if (!item) {
      throw new NotFound('item', itemId)
    }

    character.weapon = itemId

    return character
  }
}
