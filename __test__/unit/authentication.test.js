const { authentication: authenticationMiddleware } = require('../../middlewares')
const { createToken, createInvalidToken, createAdminToken } = require('../helper/authentication-helper')

describe('Authentication', () => {
  describe('when the token is null', () => {
    it('should return false', () => {
      const decodedToken = authenticationMiddleware.decodeToken(null)
      expect(decodedToken.isValid).toBeFalsy()
    })
  })

  describe('when the token is invalid', () => {
    it('should return false', () => {
      const decodedToken = authenticationMiddleware.decodeToken(createInvalidToken())
      expect(decodedToken.isValid).toBeFalsy()
    })
  })

  describe('when the token is valid and is for an user profile', () => {
    it('should return true', () => {
      const decodedToken = authenticationMiddleware.decodeToken(createToken())
      expect(decodedToken.isValid).toBeTruthy()
      expect(decodedToken.admin).toBeFalsy()
    })
  })

  describe('when the token is valid and is for an admin profile', () => {
    it('should return true', () => {
      const decodedToken = authenticationMiddleware.decodeToken(createAdminToken())
      expect(decodedToken.isValid).toBeTruthy()
      expect(decodedToken.admin).toBeTruthy()
    })
  })
})
