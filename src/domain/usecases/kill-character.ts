import { Character } from '@/domain/entities'

export interface KillCharacter {
  kill: (characterId: string) => Promise<Character>
}
