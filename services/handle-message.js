const axios = require("axios");
const config = require("../config/line");

exports.handleMessage = async (event) => {
    try {
        console.log("📩 ได้รับข้อความ:", event.message.text);

        let messages = [];

        // 🟢 ถ้าผู้ใช้พิมพ์ "ช่องทางการชำระเงิน"
        if (event.message.text === "ช่องทางการชำระเงิน") {
            // ✅ ใช้ URL จริงของเซิร์ฟเวอร์
            const imageUrl = "https://nice-becoming-drake.ngrok-free.app/images/payment.jpg";
            
            messages.push({
                type: 'image',
                originalContentUrl: imageUrl, // ✅ ใช้ URL จริง
                previewImageUrl: imageUrl,
            });
        } else {
            messages.push({
                type: 'text',
                text: `คุณพิมพ์ว่า: "${event.message.text}"`,
            });
        }

        // ✅ ส่งข้อความกลับไปที่ LINE
        await replyMessage(event.replyToken, messages);

        console.log("✅ ส่งข้อความสำเร็จ");
    } catch (error) {
        console.error("❌ ส่งข้อความไม่สำเร็จ:", error);
    }
};

// 📌 ฟังก์ชันส่งข้อความกลับไปที่ LINE
async function replyMessage(replyToken, messages) {
    const url = "https://api.line.me/v2/bot/message/reply";
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${config.config.channelAccessToken}`, // ✅ เช็คให้แน่ใจว่าใช้ `config.config`
    };

    const body = {
        replyToken: replyToken,
        messages: messages,
    };

    try {
        await axios.post(url, body, { headers });
        console.log("✅ ส่งข้อความสำเร็จ!");
    } catch (error) {
        console.error("❌ ส่งข้อความไม่สำเร็จ:", error.response ? error.response.data : error);
    }
}