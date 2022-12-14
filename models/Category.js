const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncriement:true
    },
    category_name: {
      type:DataTypes.string,
      allowNull:false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
