const { handleFollow } = require("./handle-follow");
const { handleUnfollow } = require("./handle-unfollow");
const { handleMessage } = require("./handle-message");
const { getUserProfile } = require("../config/lineService"); // ✅ นำเข้า `getUserProfile()`

// event handler
exports.handleEvent = async (event) => {
  switch (event.type) {
    case "message":
      switch (event.message.type) {
        case "text":
          await handleMessage(event);
          break;
      }
      break;
      
    case "follow":
      const userId = event.source.userId;
      try {
        const profile = await getUserProfile(userId);
        if (profile) {
          await handleFollow(userId, profile.displayName, profile.pictureUrl);
        }
      } catch (error) {
        console.error("❌ Error fetching user profile:", error);
      }
      break;
      
    case "unfollow":
      await handleUnfollow(event.source.userId);
      break;
      
    default:
      console.log("🔹 Event not handled:", event.type);
  }
};
