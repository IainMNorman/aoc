var x = 1;
var y = 1;

var Matrix = function (rows, columns)  {
    this.rows = rows;
    this.columns = columns;
    this.myarray = new Array(this.rows);
    for (var i=0; i < this.columns; i +=1) {
        this.myarray[i]=new Array(this.rows)
    }
    return this.myarray;
}

var keypad = new Matrix(3, 3);
keypad[0][0] = '7';
keypad[1][0] = '8';
keypad[2][0] = '9';
keypad[0][1] = '4';
keypad[1][1] = '5';
keypad[2][1] = '6';
keypad[0][2] = '1';
keypad[1][2] = '2';
keypad[2][2] = '3';

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
});

lineReader.on('line', function (line) {
    for (move of line) {
        switch (move)
        {
            case 'L':
                x = x > 0 ? x - 1 : 0;
                break;
            case 'R':
                x = x < 2 ? x + 1: 2;
                break;
            case 'U':
                y = y < 2 ? y + 1 : 2;
                break;
            case 'D':
                y = y > 0 ? y - 1 : 0;
                break;
        }
    }
    console.log(`${keypad[x][y]}`);
});

lineReader.on('close', function () { process.exit() });