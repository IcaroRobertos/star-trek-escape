const routes = require('express').Router();
const ActionController = require('./controllers/actionsController');

routes.post('/', ActionController);

module.exports = routes;
