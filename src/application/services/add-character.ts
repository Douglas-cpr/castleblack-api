import { AddCharacter } from '@/domain/usecases'
import { AddCharacterRepository } from '@/application/contracts'
import { Character } from '@/domain/entities'
import { CharacterModel } from '../models'

export class AddCharacterService implements AddCharacter {
  constructor(
    private readonly addCharacterRepository: AddCharacterRepository
  ) {}

  async add(character: Character): Promise<CharacterModel> {
    const createdCharacter = await this.addCharacterRepository.add(character)
    return createdCharacter
  }
}
