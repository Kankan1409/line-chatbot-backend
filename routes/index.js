// const express = require('express');
// const router = express.Router();
// const config = require('../config/line');
// const { handleEvent } = require('../services/handle-event');
// const { middleware } = require('@line/bot-sdk');

// // http://localhost:4000/line/webhook
// router.post('webhook', middleware(config), (req, res) => {
//   Promise.all(req.body.events.map(handleEvent))
//       .then(() => res.sendStatus(200))
//       .catch(err => console.error(err));
// });


// module.exports = router;
