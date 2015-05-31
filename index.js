var path = require('path');
var fs = require('fs');

global.appRoot = path.resolve(__dirname + '../../..');

var dotenvfile_path = appRoot + '/.env';

if(typeof DOTENVFILE_PATH !== "undefined") {
  dotenvfile_path = DOTENVFILE_PATH;
}

global.dotenv = require('dotenv').config({
  path: dotenvfile_path
});

fs.exists(dotenvfile_path, function(exists){
  if(!exists) {
    console.log("WARNING: You must create a .env file at the root directory of your project.");
  }
});

