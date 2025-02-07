require('dotenv').config({ path: '../.env' }); // โหลดค่าจาก .env

const line = require('@line/bot-sdk');

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET
};

// ตรวจสอบว่าโหลดค่า .env ถูกต้องหรือไม่
if (!config.channelSecret) {
    throw new Error("CHANNEL_SECRET is missing. Check your .env file.");
}
if (!config.channelAccessToken) {
    throw new Error("CHANNEL_ACCESS_TOKEN is missing. Check your .env file.");
}

const client = new line.Client(config);

module.exports = {
    config,
    line,
    client
};