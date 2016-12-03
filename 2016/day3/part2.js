var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
});

var total = 0
var lines = [];

lineReader.on('line', function (line) {
    var sides = line.trim().replace(/\s\s+/g, ',').split(',');
    for(var i=0; i<sides.length; i++) { sides[i] = +sides[i]; } 
  lines.push(sides);
});

lineReader.on('close', function () {
    console.log(lines.length);
    for (var i = 0; i < lines.length; i=i+3){
        for (var j = 0; j < 3; j++){
            if (validateTriangle([lines[i][j], lines[i+1][j], lines[i+2][j]])){
                total++;
            }
        }
    }

    console.log(`Total: ${total}`);
    process.exit()
});

function validateTriangle(sides){
    sides.sort(function (a, b) { return a - b; });
    if (sides[0] + sides[1] > sides[2]) {
        return true;
    }
    return false;
}