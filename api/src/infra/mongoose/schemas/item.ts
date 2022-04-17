import mongoose, { Schema } from 'mongoose'

export type Item = {
  id: object
  description: string
  damage: number
  createdAt: Date
}

export const ItemSchema = new Schema<Item>({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    auto: true,
    required: true
  },
  description: { type: String, required: true },
  damage: { type: Number, required: true },
  createdAt: { type: Date, required: true, default: Date.now }
})
