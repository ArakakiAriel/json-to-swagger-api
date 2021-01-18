const colors = require('colors');
const express = require('express');
const bodyParser = require('body-parser');
const constants = require('./app/constants/constants');
const messages = require('./app/constants/messages');


const config = require('./app/config/config'); //Archivo de configuraciones, de esta forma se levanta automáticamente y lo corre

const app = express();
const convertRoute = require('./app/routes/convertRoute');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); //Middleware cuando es app.use
// parse application/json
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// covid routing
app.use(`/api/convert`, convertRoute);
app.get('/healthcheck', (req, res) => {
  res.json({ //Mando la respuesta como json
    running: true
  })
});


// 404 - Json formatting for not supported URI
app.use('*', (req, res) => { // eslint-disable-line
  res.setHeader('Content-Type', 'application/json');
  // eslint-disable-next-line max-len
  res.status(constants.NOT_FOUND_ERROR).send({ code: constants.NOT_FOUND_ERROR, message: messages.INVALID_URL });
});

//TIMEOUT
app.use((err, req, res, next) => { // eslint-disable-line
  // eslint-disable-next-line max-len
  if (req.timedout) {
    res.status(constants.REQUEST_TIMEOUT).send({
      code: messages.RESPONSE_NOK_STATUS_MESSAGE,
      message: messages.REQUEST_TIMEOUT
    });
  } else {
    res.status(constants.INTERNAL_ERROR).send({
      code: constants.INTERNAL_ERROR,
      message: messages.INTERNAL_ERROR
    });
  }
});

app.listen(process.env.PORT, () => {
    console.log("Listening on port ", process.env.PORT);
});


(() => {
    // if one of the dependencies does not response the ms can not start
    //require('./app/services/redis/init-redis-connection'); // eslint-disable-line
  })();
  