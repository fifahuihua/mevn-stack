'use strict';

const util = require('util');
const winston = require('winston');
const fs = require('fs-extra');
const DailyRotateFile = require('winston-daily-rotate-file');

function initLoggerFile(logCategory) {
  let dir = `logs/${logCategory}`;
  let filePath = `${dir}/${logCategory}/${logCategory}.log`;

  fs.ensureFileSync(filePath);
  return filePath;
}

let appLogger = new winston.Logger({
  level: 'info',
  transports: [
    new winston.transports.Console({
      level: 'info',
      colorize: true,
      label: 'AppLog',
      timestamp: new Date().toISOString()
    }),
    new DailyRotateFile({
      filename: 'logs/appLog/applog-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d'
    })
  ]
});

let consoleLogger = new winston.Logger({
  level: 'debug',
  transports: [
    new winston.transports.Console({
      level: 'info',
      colorize: true,
      label: 'Console',
      timestamp: new Date().toISOString()
    })
  ]
});

winston.loggers.add('testLog', {
  console: {
    level: 'debug',
    colorize: true,
    label: 'Test Log'
  },
  file: {
    filename: initLoggerFile('testLog'),
    level: 'debug'
  }
});

function formatArgs(args){
  return [util.format.apply(util.format, Array.prototype.slice.call(args))];
}

console.log = function(){
  consoleLogger.info.apply(consoleLogger, formatArgs(arguments));
};
console.info = function(){
  consoleLogger.info.apply(consoleLogger, formatArgs(arguments));
};
console.warn = function(){
  consoleLogger.warn.apply(consoleLogger, formatArgs(arguments));
};
console.error = function(){
  consoleLogger.error.apply(consoleLogger, formatArgs(arguments));
};
console.debug = function(){
  consoleLogger.debug.apply(consoleLogger, formatArgs(arguments));
};

module.exports = {
  appLog: appLogger,
  testLog: winston.loggers.get('testLog')
};