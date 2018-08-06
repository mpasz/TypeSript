import { Point } from "./point"; // import module from diferent file - files are modules !!!

let point /*optionalny : Point */ = new Point(1 , 2);
let x = point.x;
point.x = 10;
point.draw();