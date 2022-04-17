import mongoose from 'mongoose'

const mongoURL = process.env.MONGOOSE || 'mongodb://localhost:27017/api'

export async function connectMongoose() {
  await mongoose.connect(mongoURL)
}
