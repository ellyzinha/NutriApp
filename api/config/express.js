const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');

module.exports = () => {
    const app = express();


//SETANDO VARIÁVEIS DA APLICAÇÃO
app.set('port', process.env.PORT || config.get('server.port', process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"));

// MIDDLEWARES
app.use(bodyParser.json());

return app;

};