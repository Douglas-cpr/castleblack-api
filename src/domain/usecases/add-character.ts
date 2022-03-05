import { Character } from "@/domain/entities";

export interface AddCharacter {
  add: (character: Character) => Promise<Character>
}