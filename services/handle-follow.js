const { sequelize } = require("../config/db"); // โหลด Sequelize
const User = require("../models/user"); // โหลด Model
const { getUserProfile } = require("../services/user/index"); // ฟังก์ชันดึงโปรไฟล์

exports.handleFollow = async (event) => {
  const userId = event.source.userId;

  // ดึงโปรไฟล์ผู้ใช้จาก LINE API
  const profile = await getUserProfile(userId);
  if (!profile) {
    console.error("❌ ไม่สามารถดึงโปรไฟล์ผู้ใช้ได้");
    return;
  }

  // เริ่มต้น Transaction
  const transaction = await sequelize.transaction();
  try {
    // ค้นหา หรือ สร้างข้อมูลผู้ใช้ในฐานข้อมูล
    const [user, created] = await User.findOrCreate({
      where: { user_id: profile.userId },
      defaults: {
        display_name: profile.displayName,
        picture_url: profile.pictureUrl,
        is_active: 1,
      },
      transaction, // ใช้ Transaction ในการดำเนินการ
    });

    // Commit Transaction
    await transaction.commit();
  } catch (error) {
    // Rollback หากเกิดปัญหา
    await transaction.rollback();
    console.error("❌ Error saving user to DB:", error);
  }
};
