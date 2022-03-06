import { LoadCharactersService } from "@/application/services/load-characters";
import { LoadCharactersController } from "@/presentation/controllers/load-characters";
import { FakeLoadCharacters } from "@/infra/fake/fake-load-characters";
import { Controller } from "@/presentation/contracts";

export const makeLoadCharactersController = (): Controller<void> => {
  const repo = new FakeLoadCharacters()
  const loadCharacters = new LoadCharactersService(repo)
  return new LoadCharactersController(loadCharacters)
}