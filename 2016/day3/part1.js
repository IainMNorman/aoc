var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
});

var total = 0

lineReader.on('line', function (line) {
    var sides = line.trim().replace(/\s\s+/g, ',').split(',');
    sides.sort(function (a, b) { return a - b; });
    for(var i=0; i<sides.length; i++) { sides[i] = +sides[i]; } 
    if (sides[0] + sides[1] > sides[2]) {
        total++
    }
});

lineReader.on('close', function () {
    console.log(`Total: ${total}`);
    process.exit()
});