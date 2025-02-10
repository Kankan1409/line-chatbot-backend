const User = require("../models/user"); // Import Model User

exports.handleUnfollow = async (event) => {
  try {
    const userId = event.source.userId; // ดึง userId จาก Event

    // อัพเดตสถานะผู้ใช้ในฐานข้อมูล
    await User.update(
      { is_active: 0 }, // ตั้งค่าเป็นไม่ Active
      { where: { user_id: userId } }
    );

    console.log(`✅ User ${userId} is now inactive.`);
  } catch (err) {
    console.error("❌ Error handling unfollow event:", err);
  }
};
