const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static init(sequelize) {
    return super.init({
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        category_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        products_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        stock: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        description: {
          type: DataTypes.STRING,
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
        modelName: "Product",
        tableName: "products",
        timestamps: false,
      }
    );
  }

  static associate(models) {
    if (models.Prod_Det) {
        this.hasMany(models.Prod_Det, { foreignKey: "product_id", as: "productDetails" });
  } if (models.ProductTypes) {
      this.hasMany(models.ProductTypes, { foreignKey: "product_id", as: "productTypes" });
  } if (models.ProductCategories) {
    this.belongsTo(models.ProductCategories, { foreignKey: "category_id", as: "categories" });  // ✅ ต้องใช้ `as: "categories"`
  } else {
        console.error("❌ models.Prod_Det ไม่ถูกโหลด");
  }
}
}

module.exports = Product; // ✅ ต้องแน่ใจว่า export model ออกไป
