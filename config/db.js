const sql = require('mssql');

const config = {
  user: 'ssg',          // ชื่อผู้ใช้งาน
  password: '1234',      // รหัสผ่าน
  server: 'localhost',     // ชื่อเซิร์ฟเวอร์ เช่น localhost หรือ IP Address
  database: 'ssg_linebot', // ชื่อฐานข้อมูล
  options: {
    encrypt: true,                // ใช้การเข้ารหัส (สำหรับ Azure SQL)
    trustServerCertificate: true, // ใช้สำหรับ Development
  },
};

async function connectToDatabase() {
  try {
    const pool = await sql.connect(config);
    console.log('Connected to SQL Server');
    return pool;
  } catch (err) {
    console.error('Database connection failed:', err);
    throw err;
  }
}

module.exports = { connectToDatabase, sql };