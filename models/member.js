const { Model, DataTypes } = require("sequelize");

class Member extends Model {
  static init(sequelize) {  // ✅ ต้องรับ `sequelize` ที่ถูกต้อง
    return super.init(
      {
        id: { 
          type: DataTypes.INTEGER, 
          primaryKey: true, 
          autoIncrement: true 
        },
        name: { 
          type: DataTypes.STRING(250), 
          allowNull: false, 
          unique: true 
        },
        lastname: { 
          type: DataTypes.STRING(255), 
          allowNull: true 
        },
        sex: { 
          type: DataTypes.STRING(255), 
          allowNull: true 
        },
        phone: { 
          type: DataTypes.STRING(10), 
          allowNull: true 
        },
        name_introduc: { 
          type: DataTypes.STRING(255), 
          allowNull: true 
        },
      },
      {
        sequelize, // ✅ ต้องกำหนด sequelize ที่รับเข้ามา
        modelName: "Member",
        tableName: "members",
        timestamps: true,
        underscored: true,
      }
    );
  }
}

module.exports = Member;
