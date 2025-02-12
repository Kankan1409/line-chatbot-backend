const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

class ProductCategories extends Model {}

ProductCategories.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    categories: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "ProductCategories",
    tableName: "product_categories",
    timestamps: false,
  }
);

module.exports = ProductCategories;
