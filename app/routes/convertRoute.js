const Router = require('express').Router;
const timeout = require('connect-timeout');
const config = require('../config/config');
const context = require('../../context/default');
const getMiddlewares = require('../utils/get-middleware').getMiddlewares;

const router = Router();
router.get('/object', timeout(`${config.timeouts.timer_query}`), getMiddlewares(context.middlewares.createObject));

module.exports = router;
