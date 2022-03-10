import { AddCharacterRepository } from '@/application/contracts'
import { Character } from '@/domain/entities'
import { CharacterModel } from '@/application/models'

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
