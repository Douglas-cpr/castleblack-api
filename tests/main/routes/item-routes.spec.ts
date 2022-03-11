import { setupApp } from '@/main/config/app'

import request from 'supertest'
import { Express } from 'express'
import { badRequest, serverError } from '@/presentation/utils'

let app: Express

describe('Item Routers', () => {
  beforeAll(() => {
    app = setupApp()
  })

  describe('GET /api/item', () => {
    it('should return status code 200 on success', async () => {
      const httpResponse = await request(app).get('/api/item')

      expect(httpResponse.status).toBe(200)
    })
  })

  describe('POST /api/item', () => {
    it('should return status code 200 on success', async () => {
      const httpResponse = await request(app).post('/api/item').send({
        description: 'Fire knife',
        damage: 150
      })

      expect(httpResponse.status).toBe(200)
    })

    it('should return status code 400 if parameters are missing', async () => {
      const httpResponse = await request(app).post('/api/item').send({
        damage: 150
      })

      expect(httpResponse.status).toBe(400)
    })
  })
})
