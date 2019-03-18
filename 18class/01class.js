class Point{
    constructor(x,y){ // required 
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
console.log(Point.name)
console.log(Object.getOwnPropertyNames(Point))
console.log(Object.getOwnPropertyNames(Point.name))
console.log(Object.getOwnPropertyNames(Point.length))
console.log(Object.getOwnPropertyNames(Point.prototype))

console.log("=========================================");

var p2 = new Point(2,3);
var p3 = new Point(2,3);
console.log(p2 === p3);
console.log(p2.__proto__);

console.log(p2.__proto__ == p3.__proto__);
p2.__proto__.say = ()=>{console.log("i'm __proto__ 's function"); return 1}

console.log(p3.say())

