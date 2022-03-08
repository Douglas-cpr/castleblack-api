import { Character } from '@/domain/entities'

export interface KillCharacter {
  kill: (character: Character) => Promise<Character>
}
