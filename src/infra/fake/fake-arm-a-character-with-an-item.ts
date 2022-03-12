import { ArmACharacterWithAnItemRepository } from '@/application/contracts'
import { CharacterModel } from '@/application/models'
import { ArmACharacterWithAnItemParams } from '@/domain/usecases';
import { characters } from '@/infra/data-sources'

export class FakeArmACharacterWithAnItemRepository implements ArmACharacterWithAnItemRepository {
  async arm({ characterId, itemId }: ArmACharacterWithAnItemParams): Promise<CharacterModel> {
    const character = characters.find((character) => character.id == characterId);

    character.weapon = itemId;

    return character;
  }
}