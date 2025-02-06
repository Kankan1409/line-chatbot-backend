const line = require('@line/bot-sdk');
const { Client} = require('@line/bot-sdk');
require('dotenv').config();

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET
};
const client = new Client(config);

module.exports = {
  client,
  config,
  line
}