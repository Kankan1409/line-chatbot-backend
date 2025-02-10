require('dotenv').config(); // ✅ โหลดค่า .env

const line = require('@line/bot-sdk');

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET
};

console.log("🔍 Checking Environment Variables:");
console.log("✅ CHANNEL_ACCESS_TOKEN:", process.env.CHANNEL_ACCESS_TOKEN ? "Loaded" : "❌ MISSING");
console.log("✅ CHANNEL_SECRET:", process.env.CHANNEL_SECRET ? "Loaded" : "❌ MISSING");

if (!config.channelSecret || !config.channelAccessToken) {
    throw new Error("❌ ค่า CHANNEL_ACCESS_TOKEN หรือ CHANNEL_SECRET หายไปจาก .env หรือไม่ได้โหลด");
}

const client = new line.Client(config);

module.exports = {
    config,
    line,
    client
};
