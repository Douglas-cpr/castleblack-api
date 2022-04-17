import { model } from 'mongoose'
import { CharacterSchema, Character } from '@/infra/mongoose/schemas'

export const CharacterModel = model<Character>('Character', CharacterSchema)
