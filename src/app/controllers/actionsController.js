const { dialogflow } = require('actions-on-google');

const WelcomeAction = require('../actions/welcome');
const GetUserNameAction = require('../actions/get-user-name');
const GetSpaceshipAction = require('../actions/get-spaceship');
const GetPatentAction = require('../actions/get-patent');

const app = dialogflow({ debug: true });

app.intent('Default Welcome Intent', (conv) => WelcomeAction(conv));
app.intent('get-user-name', (conv, params) => GetUserNameAction(conv, params));
app.intent('get-spaceship', (conv, params) => GetSpaceshipAction(conv, params));
app.intent('get-patent', (conv, params) => GetPatentAction(conv, params));

module.exports = app;
