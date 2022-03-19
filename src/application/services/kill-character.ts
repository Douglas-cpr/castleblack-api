import { KillCharacter } from '@/domain/usecases'
import { KillCharacterRepository } from '@/application/contracts'
import { CharacterModel } from '@/application/models'

export class KillCharacterService implements KillCharacter {
  constructor(
    private readonly killCharacterRepository: KillCharacterRepository
  ) {}

  async kill(characterId: string): Promise<CharacterModel> {
    const killedCharacter = await this.killCharacterRepository.kill(characterId)
    return killedCharacter
  }
}
