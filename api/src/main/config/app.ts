import { setupRoutes } from '@/main/config/routes'
import { connectMongoose } from '@/main/config/mongoose'
import bodyParser from 'body-parser'

import express, { Express } from 'express'

export const setupApp = (): Express => {
  const app = express()
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  connectMongoose()
  setupRoutes(app)
  return app
}
