const { dialogflow } = require('actions-on-google');

const app = dialogflow({ debug: true });

app.intent('Default Welcome Intent', (conv) => {
  conv.ask('Star');
});

module.exports = app;
