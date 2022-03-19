import { LoadCharacterByIdRepository } from '@/application/contracts'
import { CharacterModel } from '@/application/models'
import { characters } from '@/infra/data-sources'

export class FakeLoadCharacterByIdRepository
  implements LoadCharacterByIdRepository
{
  async load(id: string): Promise<CharacterModel> {
    const character = characters.find((character) => character.id === id)
    return character
  }
}
