exports.handleEvent = async (event) => {
    events.forEach((event) => {
        if (event.type === 'message' && event.message.type === 'text') {
          client.replyMessage(event.replyToken, {
            type: 'text',
            text: `คุณพิมพ์ว่า: ${event.message.text}`,
          })
            .catch((err) => {
              console.error('Error while replying message:', err);
            });
        }
      });
  };