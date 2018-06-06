const productsController = require('../controllers').products

module.exports = (app) => {
  app.post('/products', productsController.create)
}
