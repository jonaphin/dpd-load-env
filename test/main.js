DOTENVFILE_PATH = 'test/.env';

var loadenv = require('../index.js');

console.log(process.env.LOADENV_TEST == "happening" ? "PASSED" : "FAILED");