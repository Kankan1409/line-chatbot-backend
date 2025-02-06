require('dotenv').config();
const express = require('express');
const { Client, middleware } = require('@line/bot-sdk');
const { handleEvent } = require('./services/handle-event');

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

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
