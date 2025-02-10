const { handleMessage } = require("./handle-message");
// const { handleFollow } = require("./handle-follow");
// const { handleUnfollow } = require("./handle-unfollow");

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
      // case "follow":
      //   await handleFollow(event); // เมื่อเพิ่มเพื่อน
      //   break;
      // case "unfollow":
      //   await handleUnfollow(event); // เมื่อเลิกเป็นเพื่อน
      //   break;
      //   default:
      // console.log(`❓ Unknown event type: ${event.type}`);
  }
};
