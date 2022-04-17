import { model } from 'mongoose'
import { ItemSchema, Item } from '@/infra/mongoose/schemas'

export const ItemModel = model<Item>('Item', ItemSchema)
