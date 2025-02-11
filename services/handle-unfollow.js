const { User } = require("../models");
async function handleUnfollow(userId) {
  try {
      await User.update(
          { is_active: 0 },
          { where: { user_id: userId } }
      );

      console.log(`❌ User ${userId} blocked the bot`);
  } catch (error) {
      console.error("❌ Error updating block status:", error);
  }
}

module.exports = { handleUnfollow };