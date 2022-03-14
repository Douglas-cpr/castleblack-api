import { CharacterModel } from '@/application/models'
import { Character } from '@/domain/entities'
import {
  AddCharacter,
  ArmACharacterWithAnItemParams,
  LoadCharacters,
  ArmACharacterWithAnItem
} from '@/domain/usecases'
import { mockCharactersModel } from '@/tests/domain/mocks'

import faker from 'faker'

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

export class ArmACharacterWithAnItemSpy implements ArmACharacterWithAnItem {
  params: ArmACharacterWithAnItemParams

  async arm(params: ArmACharacterWithAnItemParams): Promise<CharacterModel> {
    return {
      id: params.characterId,
      name: faker.name.firstName(),
      age: faker.datatype.number({ min: 1 }),
      health: faker.datatype.number({ max: 100, min: 1 }),
      weapon: params.itemId,
      bag: [],
      createdAt: new Date()
    }
  }
}
