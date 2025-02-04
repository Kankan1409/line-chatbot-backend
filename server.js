require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { Client, middleware } = require('@line/bot-sdk');

const app = express();
const port = process.env.PORT || 3000;

const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN || 'ACIoaYvZzBOXo7MuqoipfiyT3IHGJd1GAEjM6iVs0B5NCJkf1DV5uz8tLVprlls2AHlxc++ZfvjFYkCGXLTnzhY0ad1q/A8Nzjn79TwUYvRyR9qagPa5VT13LKhKf4W00VabEtgQS5yi6wFClNJSvgdB04t89/1O/w1cDnyilFU=',
    channelSecret: process.env.CHANNEL_SECRET || 'a0bc72e10d2846fcb256ecde92bca160',
};

const client = new Client(config);

app.use(middleware(config));
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const events = req.body.events;

    events.forEach(event => {
        if (event.type === 'message' && event.message.type === 'text') {
            client.replyMessage(event.replyToken, {
                type: 'text',
                text: `คุณพิมพ์ว่า: ${event.message.text}`,
            });
        }
    });

    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
    console.log('Environment Variables:');
    console.log(`CHANNEL_ACCESS_TOKEN: ${process.env.CHANNEL_ACCESS_TOKEN}`);
    console.log(`CHANNEL_SECRET: ${process.env.CHANNEL_SECRET}`);
});
