import type { Character } from "@/domain/entities"

export interface CharacterModel extends Character {
  id: string;
  createdAt: Date;
}