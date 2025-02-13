const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

const db = { sequelize, Sequelize };

// โหลด Models และเรียก `init()`
const models = {
  Product: require("./product"),
  Prod_Det: require("./productDetails"),
  Member: require("./member"),
  User: require("./user"),
  ProductTypes: require("./productTypes"),
  ProductCategories: require("./productCategories"),
};

Object.keys(models).forEach((modelName) => {
  db[modelName] = models[modelName].init(sequelize);
});

// ✅ เรียก `associate()` หลังจากโหลดครบแล้ว
Object.keys(models).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// ✅ ตรวจสอบว่า Product โหลดได้หรือไม่
if (!db.Product) {
  console.error("❌ models.Product ไม่ถูกโหลด");
} else {
  console.log("✅ models.Product โหลดสำเร็จ");
}
if (!db.Prod_Det) {
  console.error("❌ models.Prod_Det ไม่ถูกโหลด");
} else {
  console.log("✅ models.Prod_Det โหลดสำเร็จ");
}
module.exports = db;
