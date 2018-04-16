'use strict';

const _ = require('lodash');
const defaultConfig = require('./default');

module.exports = _.merge({
    db: {
      uri: 'mongodb://localhost:27017/mevn-stack-test'
    },
}, defaultConfig);