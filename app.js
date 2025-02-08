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

module.exports = app;