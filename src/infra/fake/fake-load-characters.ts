import { LoadCharactersRepository } from "@/application/contracts";
import { CharacterModel } from "@/application/models";
import { characters } from "@/infra/data-sources";

export class FakeLoadCharacters implements LoadCharactersRepository {
  async load(): Promise<CharacterModel[]> {
    return characters;
  }  
}