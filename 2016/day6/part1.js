var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
});

var totals = [[], [], [], [], [], [], [], []];
var input = [];
var length = 8;

lineReader.on('line', function (line) {
    input.push(line.split(''));
});

lineReader.on('close', function () {
    for (line of input) {
        for (var i = 0; i < length; i++) {
            var char = totals[i].find(function (item) {
                return item.letter == line[i];
            });

            if (char == undefined) {
                totals[i].push({ letter: line[i], count: 1 });
            } else {
                char.count = char.count + 1;
                char = undefined;
            }
        }
    }
    var part1 = '';
    var part2 = '';
    for (var i = 0; i < length; i++) {
        totals[i].sort(function (a, b) {
            return b.count < a.count;
        });
        part1 += totals[i].reverse()[0].letter;
        totals[i].sort(function (a, b) {
            return b.count > a.count;
        });
        part2 += totals[i].reverse()[0].letter;
    }

    console.log(part1);
    console.log(part2);

    process.exit();
});

