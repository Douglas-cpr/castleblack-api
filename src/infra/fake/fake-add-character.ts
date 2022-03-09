import { AddCharacterRepository } from '@/application/contracts'
import { CharacterModel } from '@/application/models'
import { Character } from '@/domain/entities'
import { characters } from '@/infra/data-sources'

import { v4 as uuidv4 } from 'uuid'

export class FakeAddCharacterRepository implements AddCharacterRepository {
  async add(character: Character): Promise<CharacterModel> {
    const newCharacterId = uuidv4()
    const newCharacter: CharacterModel = {
      id: newCharacterId,
      ...character,
      createdAt: new Date()
    }

    characters.push(newCharacter)

    return newCharacter
  }
}
