'use strict';

const path     = require('path');
var exec       = require('child_process').exec;
var parser     = require(path.join(__dirname, 'lib', 'parser'));

module.exports = () => {
  return new Promise((resolve, reject) => {
    exec('apcaccess', function(err, stdout, stderror) {
      if (err) {
        console.error(err);
	return reject(err)
      }

      var data = parser(stdout)
      resolve(data);
    })
  })
}


