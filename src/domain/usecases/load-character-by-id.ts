import { Character } from "@/domain/entities"

export interface LoadCharacterById {
  load: (id: string) => Promise<Character>
}