const express = require('express');
const router = express.Router();
const { line, config, client } = require('../config/line');
const { handleEvent } = require('../services/handle-event');
require('dotenv').config();
const path = require('path');

// เส้นทางสำหรับ URL หลัก (GET /)
router.get('/', (req, res) => {
  res.send('Welcome to my LINE Bot Server!');
});
router.use('/images', express.static(path.join(__dirname, '../assets/images')));
// เส้นทางสำหรับ Webhook (POST /webhook)
router.post('/webhook', async (req, res) => {
  const events = req.body.events;
  for (const event of events) {
    await handleEvent(event);
  }
  res.status(200).end();
});

module.exports = router;
