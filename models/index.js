const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

console.log("🔍 Sequelize in models/index.js:", sequelize); // ✅ Debug ค่า Sequelize

const db = { sequelize, Sequelize };

// โหลด Model ทุกไฟล์ใน `models/`
fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js" && file.endsWith(".js"))
  .forEach((file) => {
    console.log(`📂 Loading Model: ${file}`);
    const model = require(path.join(__dirname, file));

    // ✅ ตรวจสอบว่า Model ถูกต้อง
    if (model.prototype instanceof Sequelize.Model) {
      console.log(`✅ Registering Model: ${model.name}`);
    } else {
      console.error(`❌ Model ${file} ไม่มี .init()`);
    }

    db[model.name] = model;
  });

// ✅ Debug ว่ามี Model อะไรใน `sequelize.models`
console.log("✅ Models Registered in Sequelize:", sequelize.models);

module.exports = db;
