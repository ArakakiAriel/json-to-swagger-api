const config = require('../app/config/config');

module.exports = {
  middlewares: {
    createObject: process.env.NODE_CONTEXT_MIDDLEWARES_CREATE_OBJECT || [
      'verify-object-format',
      "separate-fields",
      'set-response',
      'show-result-raw',
    ],
    createArray: process.env.NODE_CONTEXT_MIDDLEWARES_CREATE_ARRAY || [
    ],
    createResponse: process.env.NODE_CONTEXT_MIDDLEWARES_CREATE_RESPONSE || [
    ],
  }
};
