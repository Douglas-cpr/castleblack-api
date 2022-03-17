import { LoadCharacterById } from '@/domain/usecases'
import { LoadCharacterByIdRepository } from '@/application/contracts'
import { CharacterModel } from '@/application/models'

export class LoadCharacterByIdService implements LoadCharacterById {
  constructor(
    private readonly loadCharacterByIdRepository: LoadCharacterByIdRepository
  ) {}

  async load(id: string): Promise<CharacterModel> {
    const character = this.loadCharacterByIdRepository.load(id)
    return character
  }
}
