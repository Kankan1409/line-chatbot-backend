// const line = require('@line/bot-sdk');
// const { Client, middleware } = require('@line/bot-sdk');
// require('dotenv').config();


// const config = {
//     channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
//     channelSecret: process.env.CHANNEL_SECRET
// };
// const Client = new Client(config);

// module.exports = {
//   Client,
//   config,
//   line
// }
// const { Client } = require('@line/bot-sdk'); // ✅ นำเข้า Client อย่างถูกต้อง

// const config = {
//   channelSecret: process.env.LINE_CHANNEL_SECRET,
//   channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN
// };

// const client = new Client(config); // ✅ เปลี่ยนชื่อตัวแปรจาก Client → client

// module.exports = { client, middleware: middleware(config) };