/*
function log(message)
{
    console.log(message);
}

var message = "Hello World";

log(message);
*/
//arrow function - define functions
var log = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
//or 
var doLog1 = function () { return console.log(); };
var drawPoint = function (point) {
    //...
};
//classes
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //..
    };
    return Point;
}());
var point /*optionalny : Point */ = new Point();
point.x = 1;
point.y = 2;
point.draw();
