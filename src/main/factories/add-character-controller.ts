import { AddCharacterService } from "@/application/services/add-character";
import { AddCharacterController } from "@/presentation/controllers/add-character";
import { FakeAddCharacterRepository } from "@/infra/fake/fake-add-character";
import { Controller } from "@/presentation/contracts";
import { CharacterModel } from "@/application/models";

export const makeAddCharacterController = (): Controller<CharacterModel> => {
  const repo = new FakeAddCharacterRepository()
  const newCharacter = new AddCharacterService(repo)
  return new AddCharacterController(newCharacter)
}