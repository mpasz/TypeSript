/*
function log(message)
{
    console.log(message);
}

var message = "Hello World";

log(message);
*/





//arrow function - define functions

let log = function(message)
{
    console.log(message);
}

let doLog = (message) => console.log(message);
//or 
let doLog1 = () => console.log();

//intefaces  - always Pascal naming convention!!
interface Point{
    x: number,
    y: number
}

let drawPoint = (point: Point) => 
{
    //...
}


