const express = require('express');
const IndexController = require('../controller/IndexController');
const indexRouter = express.Router();

indexRouter.get('/', IndexController.get);
indexRouter.get('/message/:id', IndexController.getMessage);

module.exports = indexRouter;
