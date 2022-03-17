import {
  AddCharacterRepository,
  ArmACharacterWithAnItemRepository,
  LoadCharacterByIdRepository
} from '@/application/contracts'
import { Character } from '@/domain/entities'
import { CharacterModel } from '@/application/models'
import { ArmACharacterWithAnItemParams } from '@/domain/usecases'

import faker from 'faker'

export class AddCharacterRepositorySpy implements AddCharacterRepository {
  public addCharacterCalledWith: Character

  public async add(character: Character): Promise<CharacterModel> {
    this.addCharacterCalledWith = character

    const addCharacterReturnValue: CharacterModel = {
      id: faker.datatype.uuid(),
      ...this.addCharacterCalledWith,
      createdAt: new Date()
    }

    return addCharacterReturnValue
  }
}

export class ArmACharacterWithAnItemRepositorySpy
  implements ArmACharacterWithAnItemRepository
{
  public armCharacterCalledWith: ArmACharacterWithAnItemParams

  public async arm({
    characterId,
    itemId
  }: ArmACharacterWithAnItemParams): Promise<CharacterModel> {
    this.armCharacterCalledWith = { characterId, itemId }

    const armCharacterWithAnItemReturnValue: CharacterModel = {
      id: characterId,
      name: faker.name.firstName(),
      age: faker.datatype.number({ min: 1 }),
      health: faker.datatype.number({ min: 1, max: 100 }),
      weapon: itemId,
      bag: [],
      createdAt: new Date()
    }

    return armCharacterWithAnItemReturnValue
  }
}

export class LoadCharacterByIdRepositorySpy
  implements LoadCharacterByIdRepository
{
  public loadCharacterByIdCalledWith: string

  async load(id: string): Promise<CharacterModel> {
    this.loadCharacterByIdCalledWith = id

    const getCharacterByIdReturnValue: CharacterModel = {
      id,
      name: faker.name.firstName(),
      age: faker.datatype.number({ min: 1 }),
      health: faker.datatype.number({ min: 1, max: 100 }),
      weapon: faker.datatype.uuid(),
      bag: [],
      createdAt: new Date()
    }

    return getCharacterByIdReturnValue
  }
}
