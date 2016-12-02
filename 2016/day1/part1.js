var x = 0, y = 0;
var direction = 0;


var input = "R1, R3, L2, L5, L2, L1, R3, L4, R2, L2, L4, R2, L1, R1, L2, R3, L1, L4, R2, L5, R3, R4, L1, R2, L1, R3, L4, R5, L4, L5, R5, L3, R2, L3, L3, R1, R3, L4, R2, R5, L4, R1, L1, L1, R5, L2, R1, L2, R188, L5, L3, R5, R1, L2, L4, R3, R5, L3, R3, R45, L4, R4, R72, R2, R3, L1, R1, L1, L1, R192, L1, L1, L1, L4, R1, L2, L5, L3, R5, L3, R3, L4, L3, R1, R4, L2, R2, R3, L5, R3, L1, R1, R4, L2, L3, R1, R3, L4, L3, L4, L2, L2, R1, R3, L5, L1, R4, R2, L4, L1, R3, R3, R1, L5, L2, R4, R4, R2, R1, R5, R5, L4, L1, R5, R3, R4, R5, R3, L1, L2, L4, R1, R4, R5, L2, L3, R4, L4, R2, L2, L4, L2, R5, R1, R4, R3, R5, L4, L4, L5, L5, R3, R4, L1, L3, R2, L2, R1, L3, L5, R5, R5, R3, L4, L2, R4, R5, R1, R4, L3";

//var input = "R2, R2, R2, R2, R2, R2";

var commands = input.split(", ");

for (command of commands) {
    let turn = command.substr(0, 1);
    let distance = parseInt(command.substr(1));


    switch (turn) {
        case "R":           
                direction++;
            break;
        case "L":
                direction--;
            break;
    }

    direction = (direction + 4) % 4;

    switch (direction) {
        case 0:
            y += distance;
            break;
        case 1:
            x += distance;
            break;
        case 2:
            y -= distance;
            break;
        case 3:
            x -= distance;
            break;
    }

    //console.log(`Turning 90 degrees ${turn}, going ${distance} blocks (${direction}), now at ${x},${y}`);
}

console.log(`Taxi cab distance is ${Math.abs(x) + Math.abs(y)}`);
process.exit();