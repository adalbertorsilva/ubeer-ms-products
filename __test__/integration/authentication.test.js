const request = require('supertest')
const app = require('../../app')

describe('Authentication', () => {
  describe('when a request is made without an authorization token', () => {
    it('should return a 401 status', async () => {
      const response = await request(app).get('/')
      expect(response.status).toBe(401)
    })
  })
})
