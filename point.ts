export class Point // export Module to be available in diferent file -- files are modules!!!
{
    //private x: number; //acces modifier to avoid chenges of variables 
    //private y: number;

    // acces modifier can be use in constructor just like below
    constructor(private _x?: number, private _y?: number) //? mark mean optional!
    {
       this._x = _x;
       this._y = _y; 
    }

    draw () 
        {
        console.log('X: ' + this._x + ', Y: ' + this._y );
    }

    get x() //property GET
    {
        return this._x;
    }

    set x(value) //property SET
    {
        if(value < 0)
            throw new Error('Value cannot be less than 0.');
        this._x = value;
    }
}