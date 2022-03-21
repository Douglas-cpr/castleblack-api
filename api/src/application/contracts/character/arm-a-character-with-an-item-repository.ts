import { CharacterModel } from '@/application/models'
import { ArmACharacterWithAnItemParams } from '@/domain/usecases'

export interface ArmACharacterWithAnItemRepository {
  arm({
    characterId,
    itemId
  }: ArmACharacterWithAnItemParams): Promise<CharacterModel>
}
