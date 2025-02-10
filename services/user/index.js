const axios = require("axios");
const config = require("../../config/line"); // 🔹 โหลดค่า LINE API Token จาก config

// 📌 ฟังก์ชันดึงโปรไฟล์ผู้ใช้จาก LINE API
exports.getUserProfile = async (userId) => {
  try {
    const url = `https://api.line.me/v2/bot/profile/${userId}`;
    const headers = {
      "Authorization": `Bearer ${config.config.channelAccessToken}`,
      "Content-Type": "application/json",
    };

    console.log("📤 Sending request to LINE API:", url);
    console.log("🔑 Using Access Token:", config.config.channelAccessToken);

    const response = await axios.get(url, { headers });
    console.log("✅ User profile received:", response.data);
    return response.data; // ✅ คืนค่าโปรไฟล์ผู้ใช้
  } catch (error) {
    console.error("❌ Error getting user profile:", error.response?.data || error);
    return null; // ❌ ดึงโปรไฟล์ไม่ได้
  }
};

