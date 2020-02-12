const mars = require("./mars");

process.stdin.resume();
process.stdin.setEncoding('utf8')

process.stdin.on('data', function(chunk) {
  const output = mars(chunk)
  console.log(output);
});