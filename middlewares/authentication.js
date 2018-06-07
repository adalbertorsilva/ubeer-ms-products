const autoBind = require('auto-bind')
const { verify } = require('jsonwebtoken')

class AuthenticationMiddleware {
  constructor () {
    autoBind(this)
  }

  validateAuthentication (req, res, next) {
    const token = req.get('Authorization')
    const decodedToken = this.decodeToken(token)

    if (decodedToken.isValid) {
      req.state = decodedToken
      return next()
    }

    res.status(401).send()
  }

  decodeToken (token) {
    let decodedToken = {}
    try {
      decodedToken = verify(token, process.env.TOKEN_SECRET)

      decodedToken.isValid = true
    } catch (error) {
      decodedToken.isValid = false
    }

    return decodedToken
  }
}

module.exports = new AuthenticationMiddleware()
