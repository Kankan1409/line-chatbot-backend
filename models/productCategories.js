const { Model, DataTypes } = require("sequelize");
class ProductCategories extends Model {
  static init(sequelize) {  // ✅ ต้องรับ `sequelize` ที่ถูกต้อง
    return super.init(
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
  }
  static associate(models) {
    if (models.Product) {
      this.hasMany(models.Product, { foreignKey: "category_id", as: "products" });  // ✅ ใช้ `as: "products"`
    } else {
        console.error("❌ models.Product ไม่ถูกโหลด");
    }
  }
}

module.exports = ProductCategories;
