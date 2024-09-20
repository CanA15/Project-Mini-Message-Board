const express = require('express');
const messageController = require('../controller/messageController');
const IndexController = require('../controller/IndexController');

const newMessageRouter = express.Router();

newMessageRouter.get('/', messageController.get);
newMessageRouter.post('/', IndexController.post);

module.exports = newMessageRouter;
