const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME || "ssg_linebot",
  process.env.DB_USER || "ssg",
  process.env.DB_PASSWORD || "1234",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mssql",
    port: process.env.DB_PORT || 1433,
    timezone: "+07:00", // ✅ ตั้งค่า Timezone เป็นไทย (UTC+7)
    logging: false, // ❌ ปิด log SQL
    dialectOptions: {
      encrypt: true,
      trustServerCertificate: process.env.DB_TRUST_CERT === "true",
      options: {
        useUTC: false, // ✅ ปิด UTC mode
        dateFirst: 1, // ✅ ใช้รูปแบบวันที่ของไทย
      },
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

sequelize.authenticate()
  .then(() => console.log("✅ Connected to SQL Server using Sequelize"))
  .catch((err) => console.error("❌ Database connection failed:", err));

module.exports = sequelize;

