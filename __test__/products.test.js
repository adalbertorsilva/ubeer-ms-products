const app = require('../app')
const request = require('supertest')

describe('Products', () => {
  describe('when posting', () => {
    it('should return a 201 status and an object', async () => {
      const payload = {
        name: 'beer',
        price: 3.5
      }

      const response = await request(app).post('/products').send(payload)
      expect(response.status).toBe(201)
      expect(response.body).toHaveProperty('id')
      expect(response.body).toHaveProperty('name', payload.name)
      expect(response.body).toHaveProperty('price', payload.price.toString())
    })
  })
})
