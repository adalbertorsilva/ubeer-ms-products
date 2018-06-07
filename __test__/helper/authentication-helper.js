const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv')
dotEnv.config()

const createToken = () => {
  return jwt.sign({admin: false}, process.env.TOKEN_SECRET)
}

const createAdminToken = () => {
  return jwt.sign({admin: true}, process.env.TOKEN_SECRET)
}

const createInvalidToken = () => {
  return jwt.sign({}, 'wrongsecret')
}

module.exports = {
  createToken,
  createAdminToken,
  createInvalidToken
}
