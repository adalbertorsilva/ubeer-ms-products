const {Product} = require('../models')

module.exports = async () => {
  await Product.destroy({where: {}})
}
