import { ArmACharacterWithAnItemRepository } from '@/application/contracts'
import { CharacterModel } from '@/application/models'
import { ArmACharacterWithAnItemParams } from '@/domain/usecases'
import { characters, items } from '@/infra/data-sources'

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

    if (!item) {
      return null
    }

    if (!character) {
      return null
    }

    character.weapon = itemId

    return character
  }
}
