var x = 0, y = 0;
var direction = 0;


var input = "R1, R3, L2, L5, L2, L1, R3, L4, R2, L2, L4, R2, L1, R1, L2, R3, L1, L4, R2, L5, R3, R4, L1, R2, L1, R3, L4, R5, L4, L5, R5, L3, R2, L3, L3, R1, R3, L4, R2, R5, L4, R1, L1, L1, R5, L2, R1, L2, R188, L5, L3, R5, R1, L2, L4, R3, R5, L3, R3, R45, L4, R4, R72, R2, R3, L1, R1, L1, L1, R192, L1, L1, L1, L4, R1, L2, L5, L3, R5, L3, R3, L4, L3, R1, R4, L2, R2, R3, L5, R3, L1, R1, R4, L2, L3, R1, R3, L4, L3, L4, L2, L2, R1, R3, L5, L1, R4, R2, L4, L1, R3, R3, R1, L5, L2, R4, R4, R2, R1, R5, R5, L4, L1, R5, R3, R4, R5, R3, L1, L2, L4, R1, R4, R5, L2, L3, R4, L4, R2, L2, L4, L2, R5, R1, R4, R3, R5, L4, L4, L5, L5, R3, R4, L1, L3, R2, L2, R1, L3, L5, R5, R5, R3, L4, L2, R4, R5, R1, R4, L3";

//var input = "R8, R4, R4, R8";

var commands = input.split(", ");

var visited = [];
visited.push([0, 0]);

for (command of commands) {
    let turn = command.substr(0, 1);
    let distance = parseInt(command.substr(1));


    switch (turn) {
        case "R":
            if (direction == 3) {
                direction = 0;
            }
            else {
                direction += 1;
            }
            break;
        case "L":
            if (direction == 0) {
                direction = 3;
            }
            else {
                direction -= 1;
            }
            break;
    }


    for (var i = 0; i < distance; i++) {
        switch (direction) {
            case 0:
                y++;
                break;
            case 1:
                x++;
                break;
            case 2:
                y--;
                break;
            case 3:
                x--;
                break;
        }

        if (visited.find(item => {
            return item[0] == x && item[1] == y;
        }) != undefined) {
            console.log(`Been here before! ${x},${y}`);
            console.log(`Taxi cab distance is ${Math.abs(x) + Math.abs(y)}`);
            process.exit();
        }

        visited.push([x, y]);
    }
}