const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize"); // ✅ ใช้ Sequelize ที่ถูกต้อง

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: true,
    },
    display_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    picture_url: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    is_active: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    sequelize, // ✅ ตรวจสอบว่าถูกส่งเข้ามาจริง
    modelName: "User",
    tableName: "users",
    timestamps: true,
    underscored: true,
  }
);

module.exports = User; // ✅ Export Model อย่างถูกต้อง
