'use strict'
const {Model, DataTypes} = require('sequelize')

module.exports = (sequelize) => {
  class Product extends Model {
    static init (sequelize) {
      return super.init({
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL
      }, {sequelize, underscored: true})
    }
  }

  return Product
}
