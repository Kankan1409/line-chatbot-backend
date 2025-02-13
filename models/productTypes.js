const { Model, DataTypes } = require("sequelize");
class ProductTypes extends Model {
  static init(sequelize) {  // ✅ ต้องรับ `sequelize` ที่ถูกต้อง
    return super.init(
      {
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
      },
      {
        sequelize,
        modelName: "ProductTypes",
        tableName: "product_types",
        timestamps: false,
      }
    );
  }
  static associate(models) {
    if (models.Product) {  // ✅ ตรวจสอบว่ามี models.Product หรือไม่
      this.belongsTo(models.Product, { foreignKey: "product_id", as: "product" });
    } else {
      console.error("❌ models.Product ไม่ถูกโหลด");
    }
  }
}

module.exports = ProductTypes;