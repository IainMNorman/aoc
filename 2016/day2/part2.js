var x = 2;
var y = 2;

var Matrix = function (rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.myarray = new Array(this.rows);
    for (var i = 0; i < this.columns; i += 1) {
        this.myarray[i] = new Array(this.rows)
    }
    return this.myarray;
}

var keypad = new Matrix(5, 5);
keypad[0][0] = '#';
keypad[1][0] = '#';
keypad[2][0] = 'D';
keypad[3][0] = '#';
keypad[4][0] = '#';
keypad[0][1] = '#';
keypad[1][1] = 'A';
keypad[2][1] = 'B';
keypad[3][1] = 'C';
keypad[4][1] = '#';
keypad[0][2] = '5';
keypad[1][2] = '6';
keypad[2][2] = '7';
keypad[3][2] = '8';
keypad[4][2] = '9';
keypad[0][3] = '#';
keypad[1][3] = '2';
keypad[2][3] = '3';
keypad[3][3] = '4';
keypad[4][3] = '#';
keypad[0][4] = '#';
keypad[1][4] = '#';
keypad[2][4] = '1';
keypad[3][4] = '#';
keypad[4][4] = '#';

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
});

lineReader.on('line', function (line) {
    for (move of line) {
        var tX = x;
        var tY = y;
        switch (move) {
            case 'L':
                x = x > 0 ? x - 1 : 0;
                break;
            case 'R':
                x = x < 4 ? x + 1 : 4;
                break;
            case 'U':
                y = y < 4 ? y + 1 : 4;
                break;
            case 'D':
                y = y > 0 ? y - 1 : 0;
                break;
        }
        if (keypad[x][y] == '#')
        {
            x = tX;
            y = tY;
        }    
    }

    console.log(`${keypad[x][y]}`);
});

lineReader.on('close', function () { process.exit() });