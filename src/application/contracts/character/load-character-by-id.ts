import { CharacterModel } from '@/application/models'

export interface LoadCharacterByIdRepository {
  load(id: string): Promise<CharacterModel>
}
