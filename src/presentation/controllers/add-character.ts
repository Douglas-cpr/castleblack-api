import { AddCharacter } from '@/domain/usecases'
import { Controller, HttpResponse, Validation } from '@/presentation/contracts'
import { Character } from '@/domain/entities'
import { CharacterModel } from '@/application/models'
import { serverError, badRequest, ok } from '@/presentation/utils'

export class AddCharacterController implements Controller<Character> {
  constructor(
    private readonly validation: Validation,
    private readonly addCharacter: AddCharacter
  ) {}

  async handle(character: Character): Promise<HttpResponse<CharacterModel>> {
    try {
      const error = this.validation.validate(character)

      if (error) {
        return badRequest(error)
      }

      const newCharacter = await this.addCharacter.add(character)
      return ok(newCharacter)
    } catch (e) {
      return serverError(e)
    }
  }
}
