import { CharacterModel } from '@/application/models'

export interface LoadCharactersRepository {
  load(): Promise<CharacterModel[]>
}
