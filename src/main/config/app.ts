import { setupRoutes } from '@/main/config/routes'
import bodyParser from 'body-parser'

import express, { Express } from 'express'

export const setupApp = (): Express => {
  const app = express()
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  setupRoutes(app)
  return app
}

