const line = require('@line/bot-sdk');
const { Client, middleware } = require('@line/bot-sdk');

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET
};
const client = new Client(config);

module.exports = {
  line,
  lineConfig,
  client
}