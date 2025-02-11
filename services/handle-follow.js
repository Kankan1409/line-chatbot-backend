const { User } = require("../models");

// ✅ เพิ่มหรืออัปเดตผู้ใช้เมื่อเพิ่มเพื่อน
async function handleFollow (userId, displayName, pictureUrl) {
    try {
        await User.upsert({
            user_id: userId,
            display_name: displayName,
            picture_url: pictureUrl,
            is_active: 1,
        });

        console.log(`✅ User ${displayName} added/updated`);
    } catch (error) {
        console.error("❌ Error adding user:", error);
    }
}

module.exports = { handleFollow };