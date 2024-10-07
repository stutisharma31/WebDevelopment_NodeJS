var fs = require('fs');
var pathToFile = process.argv[2];

function counter(callback) {
    var buffer = fs.readFile(pathToFile, function (err, data) {
    var bufferString = buffer.toString();
    var bufferStringSplit = bufferString.split('\n');
  });
  callback();
}

function logMyNumber() {
  console.log(bufferStringSplit.length-1);
}

counter(logMyNumber);