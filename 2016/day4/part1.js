var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
});

var total = 0

lineReader.on('line', function (line) {
    if (getCheckDigit(line) == calcCheckdigit(line)) {
        total = total + getSector(line);
    }
});

lineReader.on('close', function () {
    console.log(`Total: ${total}`);
    process.exit();
});

function reverseString(str) {
    return str.split('').reverse().join('');
}

function getCheckDigit(line) {
    return reverseString(reverseString(line).substr(1, 5));
}

function getSector(line) {
    return parseInt(reverseString(reverseString(line).substr(7, 3)));
}

function calcCheckdigit(line) {
    name = reverseString(line).substr(10).split('').sort().join('');
    name = name.replace(/-/g, '');
    var counts = [];
    var previouschar = '#';
    var count = 0;
    for (char of name) {
        if (char == previouschar) {
            count++;
        }
        else {
            if (previouschar != '#') {
                counts.push({ letter: previouschar, count: count });
            }
            previouschar = char;
            count = 1;
        }
    }
    counts.push({ letter: previouschar, count: count });
    counts.sort(function (a, b) {
        var x = b.count - a.count;
        return x == 0 ? (b.letter > a.letter ? -1 : 1) : x;
    })
    var out = '';
    for (c of counts.slice(0, 5)) {
        out += c.letter;
    }
    return out;
}