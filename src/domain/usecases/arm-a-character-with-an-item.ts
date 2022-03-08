import { Character } from '../entities'

export interface ArmACharacterWithAnItem {
  arm: (characterId: string, itemId: string) => Promise<Character>
}
