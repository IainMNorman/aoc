var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
});

var total = 0
var decodedstring = '';
var sector = 0;
var answer = 0;

lineReader.on('line', function (line) {
    if (getCheckDigit(line) == calcCheckdigit(line)) {
        sector = getSector(line);
        total = total + sector;
        decodedstring = '';
        for (char of getName(line)) {
            decodedstring += decodeChar(char, sector);
        }
        if (decodedstring.substr(0,5) == 'north') {
            answer = sector;
            console.log(decodedstring)
        }
    }
});

lineReader.on('close', function () {

    console.log(`Total: ${total}`);
    console.log(`Sector found: ${answer}`)
    process.exit();
});

function decodeChar(char, number) {
    if (char == '-') return ' ';
    number = number % 26;
    charcode = char.charCodeAt();
    newcode = charcode + number;
    if (newcode > 122) {
        newcode = 96 + (newcode - 122);
    }
    return String.fromCharCode(newcode);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function getCheckDigit(line) {
    return reverseString(reverseString(line).substr(1, 5));
}

function getSector(line) {
    return parseInt(reverseString(reverseString(line).substr(7, 3)));
}

function getNameSorted(line) {
    return reverseString(line).substr(10).split('').sort().join('');
}

function getName(line) {
    return reverseString(reverseString(line).substr(10));
}

function calcCheckdigit(line) {
    name = getNameSorted(line);
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