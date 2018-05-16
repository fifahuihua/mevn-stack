'use strict';

const GLOBAL_CONSTANTS = require('../../common/utils/constants');

exports.renderIndex = function(req, res) {
  res.render('index', { 
    title: "The basic stack with mongodb, express, vuejs and node.js.",
    jsFiles: GLOBAL_CONSTANTS.JS_FILES,
    cssFiles: GLOBAL_CONSTANTS.CSS_FILES
  });
};