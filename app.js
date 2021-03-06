const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const {authentication: authenticationMiddleware} = require('./middlewares')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use(authenticationMiddleware.validateAuthentication)
require('./routes')(app)

module.exports = app
