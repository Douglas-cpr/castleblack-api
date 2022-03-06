import { LoadCharacters } from "@/domain/usecases";
import { LoadCharactersRepository } from "@/application/contracts";
import { Character } from "@/domain/entities";

export class LoadCharactersService implements LoadCharacters {
  constructor(private readonly loadCharactersRepository: LoadCharactersRepository) {}

  async load(): Promise<Character[]> {
    const characters = await this.loadCharactersRepository.load();
    return characters;
  }
}