import {
  ArmACharacterWithAnItem,
  ArmACharacterWithAnItemParams
} from '@/domain/usecases'
import { ArmACharacterWithAnItemRepository } from '@/application/contracts'
import { CharacterModel } from '@/application/models'

export class ArmACharacterWithAnItemService implements ArmACharacterWithAnItem {
  constructor(
    private readonly armACharacterWithAnItemRepository: ArmACharacterWithAnItemRepository
  ) {}

  async arm({
    characterId,
    itemId
  }: ArmACharacterWithAnItemParams): Promise<CharacterModel> {
    const character = await this.armACharacterWithAnItemRepository.arm({
      characterId,
      itemId
    })
    return character
  }
}
