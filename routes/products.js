const {products: productsController} = require('../controllers')
const {userpermition: userPermitionMiddleware} = require('../middlewares')

module.exports = (app) => {
  app.post('/products', userPermitionMiddleware.checkUserPermition, productsController.create)
}
