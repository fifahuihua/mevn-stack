'use strict';

const FileUtil = require('./file.server.util');

var cssFiles = FileUtil.getFilesInDir('./client/public/dist/css/', '.css');
var jsFiles = FileUtil.getFilesInDir('./client/public/dist/js/', '.js');

module.exports = {
  CSS_FILES: cssFiles,
  JS_FILES: jsFiles
}