const express = require('express');
const router = express.Router();

// เส้นทางสำหรับ URL หลัก (GET /)
router.get('/', (req, res) => {
  res.send('Welcome to my LINE Bot Server!');
});

// เส้นทางสำหรับ Webhook (POST /webhook)
router.post('/webhook', (req, res) => {
  res.status(200).send('Webhook endpoint is active!');
});

module.exports = router;
