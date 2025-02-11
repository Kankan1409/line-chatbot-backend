const { User } = require("../../../models");

const getUsers = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    console.error("❌ Error fetching users:", error);
    throw new Error(`Failed to get users: ${error.message}`);
  }
};

const getUserById  = async (parent, { id }, context, info) => {
  try {
    const userId = parseInt(id, 10); // ✅ แปลง `id` เป็น Integer
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      console.error(`❌ User with ID ${userId} not found`);
      return null; // ✅ คืน `null` ถ้าไม่พบ User
    }
    return user;
  } catch (error) {
    console.error("❌ Error fetching user:", error);
    throw new Error(`Failed to get user: ${error.message}`);
  }
};

module.exports = { getUsers, getUserById };
