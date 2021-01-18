const config = require('../app/config/config');

module.exports = {
  middlewares: {
    createObject: process.env.NODE_CONTEXT_MIDDLEWARES_CREATE_OBJECT || [
      'set-response',
      'show-result-raw',
    ],
    createArray: process.env.NODE_CONTEXT_MIDDLEWARES_CREATE_ARRAY || [
    ],
    createResponse: process.env.NODE_CONTEXT_MIDDLEWARES_CREATE_RESPONSE || [
    ],
  }
};
