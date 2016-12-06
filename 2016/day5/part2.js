var Stopwatch = require("node-stopwatch").Stopwatch;
var stopwatch = Stopwatch.create();
stopwatch.start();

var md5 = require('md5-jkmyers');
var input = 'cxdnnyjw';
var count = 0;
var hash = '';
var password = ['#','#','#','#','#','#','#','#'];

while (true) {
    hash = md5(input + count);
    if (hash.substr(0, 5) == '00000') {
        var pos = +(hash[5]);
        var char = hash[6];
        if (pos < 8 && password[pos] == '#') {
            password[pos] = char;
            console.log(`${count} : ${password.join('')}`);
            if (password.indexOf('#') == -1) {
                break;
            }
        }
    }
    count++;
}
console.log(password.join(''));
stopwatch.stop();
console.log("Milliseconds: " + stopwatch.elapsedMilliseconds);