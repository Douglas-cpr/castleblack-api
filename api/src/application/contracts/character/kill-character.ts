import { CharacterModel } from '@/application/models'

export interface KillCharacterRepository {
  kill: (characterId: string) => Promise<CharacterModel>
}
