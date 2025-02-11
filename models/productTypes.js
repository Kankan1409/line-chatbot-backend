const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const ProductTypes = sequelize.define("ProductTypes", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  typeName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  remaining: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: "product_types",
  timestamps: false
});

module.exports = ProductTypes; 
