const axios = require("axios");
require("dotenv").config();

const CHANNEL_ACCESS_TOKEN = process.env.CHANNEL_ACCESS_TOKEN;

// 📌 ฟังก์ชันดึงข้อมูลโปรไฟล์จาก LINE API
async function getUserProfile(userId) {
  try {
    const response = await axios.get(`https://api.line.me/v2/bot/profile/${userId}`, {
      headers: { Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}` },
    });

    return response.data;
  } catch (error) {
    console.error("❌ Error fetching user profile:", error);
    return null;
  }
}

module.exports = { getUserProfile };
