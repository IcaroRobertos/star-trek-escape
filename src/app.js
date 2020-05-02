const express = require('express');
const cors = require('cors');

const ActionController = require('./controllers/actionsController');

class App {
  constructor() {
    this.express = express();
  }

  middleware() {
    this.express.use(cors());
  }

  routes() {
    this.express.use('/', ActionController.actions);
  }
}

module.exports = new App().express;
