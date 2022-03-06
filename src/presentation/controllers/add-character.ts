import { AddCharacter } from "@/domain/usecases";
import { Controller, HttpResponse, ok } from "@/presentation/contracts";
import { Character } from "@/domain/entities";
import { CharacterModel } from "@/application/models";
import { serverError } from "@/presentation/utils";

export class AddCharacterController implements Controller<Character> {
  constructor(private readonly addCharacter: AddCharacter) {}

  async handle(character: Character): Promise<HttpResponse<CharacterModel>> {
    try {
      const newCharacter = await this.addCharacter.add(character);
      return ok(newCharacter)
    } catch(e) {
      return serverError(e)
    }
  }
}