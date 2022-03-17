import { Character } from '@/domain/entities'
import { LoadCharacterById } from '@/domain/usecases'
import { LoadCharacterByIdRepository } from '../contracts'
import { CharacterModel } from '@/application/models'

export class LoadCharacterByIdService implements LoadCharacterById {
  constructor(
    private readonly loadCharacterByIdRepository: LoadCharacterByIdRepository
  ) {}

  load(id: string): Promise<CharacterModel> {
    const character = this.loadCharacterByIdRepository.load(id)
    return character
  }
}
