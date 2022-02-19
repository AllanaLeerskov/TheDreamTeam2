const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Price extends Model {}

Price.init(
  {
  
    lower: {
      type: DataTypes.DECIMAL, 
      allowNull: true
      
    },
    upper: {
      type: DataTypes.DECIMAL, 
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Price'
  }
);

module.exports = Price;
