'use strict';

const MainController = require('../controller/main.server.controller');

module.exports = function (app) {
  app.route('/').get(MainController.renderIndex);
};