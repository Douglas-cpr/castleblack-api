import { CharacterModel } from "@/application/models/character";
import { Character } from "@/domain/entities";

export interface AddCharacterRepository {
  add(character: Character): Promise<CharacterModel>;
}