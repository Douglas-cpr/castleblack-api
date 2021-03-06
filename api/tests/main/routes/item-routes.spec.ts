import { setupApp } from '@/main/config/app'

import request from 'supertest'
import { Express } from 'express'

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

    it('should return a new item on success', async () => {
      const httpResponse = await request(app).post('/api/item').send({
        description: 'Fire knife',
        damage: 99
      })

      expect(httpResponse.body).toHaveProperty('id')
      expect(httpResponse.body).toHaveProperty('description')
      expect(httpResponse.body).toHaveProperty('damage')
    })
  }),
    describe('GET api/item/:id', () => {
      it('should return status 200 on success', async () => {
        const httpResponse = await request(app).get('/api/item/1')

        expect(httpResponse.status).toBe(200)
      })

      it('should return status code 404 if not found', async () => {
        const httpResponse = await request(app).get('/api/item/any_id')

        expect(httpResponse.status).toBe(404)
      })
    })

  describe('DELETE api/item/destroy/:itemId', () => {
    it('should return status 200 on success', async () => {
      const httpResponse = await request(app).delete('/api/item/destroy/1')

      expect(httpResponse.status).toBe(200)
    })

    it('should return status code 404 if not found', async () => {
      const httpResponse = await request(app).delete('/api/item/destroy/any_id')

      expect(httpResponse.status).toBe(404)
    })
  })

  describe('PUT api/item/change-damage', () => {
    it('should return status 200 on success', async () => {
      const httpResponse = await request(app)
        .put('/api/item/change-damage')
        .send({
          itemId: '2',
          damage: 50
        })

      expect(httpResponse.status).toBe(200)
    })

    it('should return status code 400 if parameters are missing', async () => {
      const httpResponse = await request(app)
        .put('/api/item/change-damage')
        .send({
          itemId: 'any_id'
        })

      expect(httpResponse.status).toBe(400)
    })

    it('should return status code 400 if parameters type are invalid', async () => {
      const httpResponse = await request(app)
        .put('/api/item/change-damage')
        .send({
          itemId: 'any_id',
          damage: 'invalid_type'
        })

      expect(httpResponse.status).toBe(400)
    })

    it('should return status code 404 if not found', async () => {
      const httpResponse = await request(app)
        .put('/api/item/change-damage')
        .send({
          itemId: 'any_id',
          damage: 50
        })

      expect(httpResponse.status).toBe(404)
    })
  })
})
