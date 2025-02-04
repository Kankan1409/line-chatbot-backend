require('dotenv').config();
const express = require('express');
const { Client, middleware } = require('@line/bot-sdk');

const app = express();
const port = process.env.PORT || 4000;

// ตั้งค่า LINE Bot
const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET
};
const client = new Client(config);

app.get('/api/user', (req, res) => {
    res.json({ message: 'Hello from Backend!', userId: '1234567890' });
});

app.post('/webhook', middleware(config), (req, res) => {
    Promise.all(req.body.events.map(handleEvent))
        .then(() => res.sendStatus(200))
        .catch(err => console.error(err));
});

async function handleEvent(event) {
    if (event.type === 'message' && event.message.type === 'text') {
        return client.replyMessage(event.replyToken, { type: 'text', text: `คุณพิมพ์ว่า: ${event.message.text}` });
    }
    return Promise.resolve(null);
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
