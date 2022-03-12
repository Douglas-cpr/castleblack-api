import { Character } from '@/domain/entities'


export type ArmACharacterWithAnItemParams = {
  characterId: string,
  itemId: string
}
export interface ArmACharacterWithAnItem {
  arm: ({ characterId, itemId }: ArmACharacterWithAnItemParams) => Promise<Character>
}
