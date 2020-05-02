const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

class App {
  constructor() {
    this.express = express();

    this.middleware();
    this.routes();
  }

  middleware() {
    this.express.use(cors());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
  }

  routes() {
    this.express.use(routes);
  }
}

module.exports = new App().express;
