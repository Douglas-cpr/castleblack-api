import { CharacterModel } from '@/application/models'
import { Character } from '@/domain/entities'
import { AddCharacter, LoadCharacters } from '@/domain/usecases'
import { mockCharactersModel } from '@/tests/domain/mocks'

export class LoadCharactersSpy implements LoadCharacters {
  result: CharacterModel[]

  async load(): Promise<CharacterModel[]> {
    this.result = mockCharactersModel()
    return this.result
  }
}

export class AddCharacterSpy implements AddCharacter {
  params: Character

  async add(params: Character): Promise<CharacterModel> {
    return {
      id: 'any_id',
      ...params,
      createdAt: new Date()
    }
  }
}
