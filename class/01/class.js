class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return `${this.x} ${this.y}`
    }
}
Point.prototype.say = (name,age)=> `hi , i'm ${name},i'm ${age} years old`
var p1 = new Point(1,2)
console.log(p1)
console.log(p1.toString())
console.log(Point.prototype.constructor == Point);
console.log(Object.keys(Point.prototype));
console.log(p1.say('nico',31));

