'use strict';

const mongoose = require('mongoose');
const path = require('path');
const _ = require('lodash');

const config = require('./config');
const appLogger = require('./logger').appLog;
const FileUtil = require('./../common/utils/file.server.util');

exports.init = function* () {
  let options = _.get(config.db, 'options', {});
  let uri = config.db.uri;

  mongoose.connection.on('error', function () {
    appLogger.fatal(`[Mongoose] failed to connect to ${uri}`);
  });
  mongoose.connection.on('disconnected', function () {
    appLogger.error(`[Mongoose] disconnect event found in ${uri}`);
  });
  mongoose.connection.on('connected', function () {
    appLogger.info(`[Mongoose] success to connect to ${uri}`);
  });

  try {
    let dbConn = yield mongoose.connect(uri, options);
    let models = FileUtil.getGlobbedPaths('./server/*/models/*.server.model.js');
    for( let model of models) {
      require(path.resolve(model));
    }
    return dbConn;
  } catch (error) {
    appLogger.error("[Database Connection] Failed to connected " + uri, error);
    return null;
  }
};