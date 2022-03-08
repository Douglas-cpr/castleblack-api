import { Character } from '@/domain/entities'

export interface LoadCharacters {
  load: () => Promise<Character[]>
}
