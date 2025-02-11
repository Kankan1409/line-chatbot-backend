const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");
const db = { sequelize, Sequelize };

// โหลด Model ทุกไฟล์ใน `models/`
fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js" && file.endsWith(".js"))
  .forEach((file) => {
    const model = require(path.join(__dirname, file));

    // ✅ ตรวจสอบว่า Model ถูกต้อง
    if (model.prototype instanceof Sequelize.Model) {
    } else {
      console.error(`❌ Model ${file} ไม่มี .init()`);
    }

    db[model.name] = model;
  });

module.exports = db;
