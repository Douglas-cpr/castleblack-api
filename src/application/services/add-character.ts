import { AddCharacter } from '@/domain/usecases'
import { AddCharacterRepository } from '@/application/contracts'
import { Character } from '@/domain/entities'
import { CharacterModel } from '@/application/models'
import { InvalidHealthParamError } from '@/application/errors'

export class AddCharacterService implements AddCharacter {
  constructor(
    private readonly addCharacterRepository: AddCharacterRepository
  ) {}

  async add(character: Character): Promise<CharacterModel> {
    if (character.health > 100 || character.health <= 0) {
      throw new InvalidHealthParamError()
    }

    const createdCharacter = await this.addCharacterRepository.add(character)
    return createdCharacter
  }
}
