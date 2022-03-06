import { LoadCharacters } from "@/domain/usecases";
import { CharacterModel } from "@/application/models";
import { Controller, HttpResponse, ok, ServerError } from "@/presentation/contracts";

export class LoadCharactersController implements Controller<void> {
  constructor(private readonly loadCharacters: LoadCharacters) {}
  
  async handle(): Promise<HttpResponse<CharacterModel[]>> {
    try {
      const characters = await this.loadCharacters.load()
      return ok(characters)
    } catch (e) {
      return ServerError(e)
    }
  }
} 