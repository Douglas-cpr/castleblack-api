import { LoadCharacters } from '@/domain/usecases'
import { CharacterModel } from '@/application/models'
import { Controller, HttpResponse, ok } from '@/presentation/contracts'
import { serverError } from '@/presentation/utils'

export class LoadCharactersController implements Controller<void> {
  constructor(private readonly loadCharacters: LoadCharacters) {}

  async handle(): Promise<HttpResponse<CharacterModel[]>> {
    try {
      const characters = await this.loadCharacters.load()
      return ok(characters)
    } catch (e) {
      return serverError(e)
    }
  }
}
