const { Model, DataTypes } = require("sequelize");


class Prod_Det extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: { 
          type: DataTypes.INTEGER, 
          primaryKey: true, 
          autoIncrement: true 
        },
        product_id: { 
          type: DataTypes.INTEGER, 
          allowNull: false

        },
        attribute_name: { 
          type: DataTypes.STRING(255),  // ✅ ตรงกับ nvarchar(255)
          allowNull: false 
        },
        attribute_value: { 
          type: DataTypes.STRING(255),  // ✅ ตรงกับ nvarchar(255)
          allowNull: false 
        },
        remaining: { 
          type: DataTypes.INTEGER, 
          allowNull: true  // ✅ อนุญาตให้เป็น null
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
        },
      },
      {
        sequelize,
        modelName: "Prod_Det",
        tableName: "product_details",
        timestamps: false, // ✅ ใช้ timestamps: false เพราะเราใช้ created_at / updated_at เอง
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

module.exports = Prod_Det;

