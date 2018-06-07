const app = require('../../app')
const request = require('supertest')
const { createToken, createAdminToken } = require('../helper/authentication-helper')

describe('Products', () => {
  describe('when a post request is made with an user token', () => {
    it('should return a 403 status', async () => {
      const response = await request(app).post('/products').set('Authorization', createToken())
      expect(response.status).toBe(403)
    })
  })

  describe('when posting', () => {
    it('should return a 201 status and an object', async () => {
      const payload = {
        name: 'beer',
        price: 3.5
      }

      const response = await request(app).post('/products').send(payload).set('Authorization', createAdminToken())
      expect(response.status).toBe(201)
      expect(response.body).toHaveProperty('id')
      expect(response.body).toHaveProperty('name', payload.name)
      expect(response.body).toHaveProperty('price', payload.price.toString())
    })
  })
})
