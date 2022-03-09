import { setupApp } from '@/main/config/app'

import request from 'supertest'
import { Express } from 'express'

let app: Express

describe('Character Routers', () => {
  beforeAll(() => {
    app = setupApp()
  })

  describe('GET /api/character', () => {
    it('should return status code 200 on success', async () => {
      const httpResponse = await request(app).get('/api/character')

      expect(httpResponse.status).toBe(200)
    })
  })

  describe('POST /api/character', () => {
    it('should return status code 200 on success', async () => {
      const httpResponse = await request(app).post('/api/character').send({
        name: 'any_name',
        age: 20
      })

      expect(httpResponse.status).toBe(200)
    })

    it('should return status code 400 if parameters are missing', async () => {
      const httpResponse = await request(app).post('/api/character').send({
        age: 20
      })

      expect(httpResponse.status).toBe(400)
    })

    it('should return status code 400 if parameters are invalid', async () => {
      const httpResponse = await request(app).post('/api/character').send({
        name: 'any_name',
        age: '20x'
      })

      expect(httpResponse.status).toBe(400)
    })

    it('should return a new character on success', async () => {
      const httpResponse = await request(app).post('/api/character').send({
        name: 'any_name',
        age: 20
      })

      expect(httpResponse.body).toHaveProperty('id')
      expect(httpResponse.body).toHaveProperty('name')
      expect(httpResponse.body).toHaveProperty('age')
    })
  })
})
