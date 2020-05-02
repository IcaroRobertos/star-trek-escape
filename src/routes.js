const routes = require('express').Router();
const ActionController = require('./app/controllers/actionsController');

routes.post('/', ActionController);

module.exports = routes;
