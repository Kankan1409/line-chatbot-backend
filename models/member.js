const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize"); // ✅ ใช้ Sequelize ที่ถูกต้อง

class Member extends Model {}

Member.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: true,
    },
    lastname: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    name_introduc: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize, 
    modelName: "Member",
    tableName: "members",
    timestamps: true,
    underscored: true,
  }
);

console.log("🔍 Sequelize in User.js:", sequelize);
console.log("✅ User Model Initialized:", Member);

module.exports = Member; 
