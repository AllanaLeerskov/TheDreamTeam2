const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Product model
class Product extends Model {}

// create fields/columns for Product model
Product.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Price',
        key: 'id'
      }
    },
    photo: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      
      references: {
        model: 'User',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product'
  }
);

module.exports = Product;
