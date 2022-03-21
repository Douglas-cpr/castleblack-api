import { KillCharacterRepository } from '@/application/contracts'
import { CharacterModel } from '@/application/models'
import { characters, setCharacterHealthToZero } from '@/infra/data-sources'

export class FakeKillCharacterRepository implements KillCharacterRepository {
  async kill(characterId: string): Promise<CharacterModel> {
    const killedCharacter = characters.find(
      (character) => character.id == characterId
    )
    setCharacterHealthToZero(characterId)
    return killedCharacter
  }
}
