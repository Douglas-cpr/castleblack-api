import mongoose, { Schema } from 'mongoose'

export type Character = {
  id: object
  name: string
  age: number
  health: number
  weapon: object
  bag: string[]
  createdAt: Date
}

export const CharacterSchema = new Schema<Character>(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      index: true,
      auto: true,
      required: true
    },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    health: { type: Number, required: true },
    weapon: { type: Schema.Types.ObjectId, ref: 'Item' },
    bag: { type: [], required: false },
    createdAt: { type: Date, required: true }
  },
  { timestamps: true }
)
