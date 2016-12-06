var Stopwatch = require("node-stopwatch").Stopwatch;
var stopwatch = Stopwatch.create();
stopwatch.start();

var md5 = require('md5-jkmyers');
var input = 'cxdnnyjw';
var count = 0;
var hash = '';
var password = '';
while (true) {
    hash = md5(input + count);
    if (hash.substr(0, 5) == '00000') {
        password += hash.substr(5, 1);
        console.log(`${count} : ${password}`);
    }
    if (password.length == 8) {
        break;
    }
    count++;
}
console.log(password);
stopwatch.stop();
console.log("Milliseconds: " + stopwatch.elapsedMilliseconds);