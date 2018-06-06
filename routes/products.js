const {products: productsController} = require('../controllers')

module.exports = (app) => {
  app.post('/products', productsController.create)
}
