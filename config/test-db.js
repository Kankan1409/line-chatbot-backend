const sequelize = require("./config/db");
const User = require("../models/user");

(async () => {
    try {
        await sequelize.sync(); // ✅ ซิงค์ตารางอัตโนมัติ (ถ้ายังไม่มี)
        console.log("✅ Database synchronized successfully!");
        
        // ✅ ลองเพิ่มข้อมูลตัวอย่าง
        const user = await User.create({
            user_id: "U1234567890",
            display_name: "John Doe",
            picture_url: "https://example.com/image.jpg",
            user_phone: "0812345678",
            user_role: "user"
        });
        console.log("✅ User created:", user.toJSON());
    } catch (err) {
        console.error("❌ Error:", err);
    } finally {
        await sequelize.close();
    }
})();
