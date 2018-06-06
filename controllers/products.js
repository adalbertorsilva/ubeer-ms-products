const { Product } = require('../models')
const autoBind = require('auto-bind')

class ProductsController {
  constructor () {
    autoBind(this)
  }

  async create (req, res) {
    const product = await Product.create(req.body)
    res.status(201).send(product)
  }
}

module.exports = new ProductsController()
