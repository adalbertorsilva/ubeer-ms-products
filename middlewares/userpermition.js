const autoBind = require('auto-bind')

class UserPermitionMiddleware {
  constructor () {
    autoBind(this)
  }

  checkUserPermition (req, res, next) {
    req.state.admin ? next() : res.status(403).send()
  }
}

module.exports = new UserPermitionMiddleware()
