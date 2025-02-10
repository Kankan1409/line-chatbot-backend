const fs = require("fs");
const path = require("path");
const sequelize = require("../config/sequelize"); // ✅ นำ sequelize จาก `db.js` มาใช้
const Sequelize = require("sequelize");

const db = { sequelize, Sequelize };

// ✅ โหลด Model ทุกไฟล์อัตโนมัติ
fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js" && file.endsWith(".js"))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// ✅ เชื่อมความสัมพันธ์ระหว่าง Models
Object.keys(db).forEach((modelName) => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

module.exports = db;
