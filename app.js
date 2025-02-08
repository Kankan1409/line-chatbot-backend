const express = require('express');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index');

const app = express();
app.use(bodyParser.json()); // รองรับ JSON ในคำขอ

// ใช้ Routes จาก index.js
app.use('/', indexRoutes);

// เริ่มต้นเซิร์ฟเวอร์
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

////////////////////////////////////////////////////
const { connectToDatabase, sql } = require('./config/db');

async function main() {
  try {
    const pool = await connectToDatabase();

    // ทดสอบ Query
    const result = await pool.request()
      .query('SELECT TOP 10 * FROM ssg_user'); // ระบุชื่อ Table ของคุณ
    console.log(result.recordset);

    pool.close(); // ปิดการเชื่อมต่อ
  } catch (err) {
    console.error('Error running query:', err);
  }
}
main();

module.exports = app;