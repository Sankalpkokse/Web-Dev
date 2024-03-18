var a =10;
var a = 20;
let b = 30;
b= 40;
console.log(a);
console.log(b);

// ternary operator
let age = 2;
let stringValue = (age>18)?"bada hai":"chota hai";
console.log(stringValue);

// playing with non booleans
console.log(false||5);
console.log(false||'sankalp'||77);
console.log(false&&7);
console.log(88&&'sankalo'||true);
// console.log("hello")
// console.log();
// console.log();
// console.log();


// Object
// normal object creation 
let obj = {
    length : 4,
    breadth: 5,
    // draw : function(){
    //     console.log("I am drawing");
    // },
    draw(){
        console.log("I am drawing");
    }
}

// but what if i have to create same object multiple times
// factory function

function createObj(){
    let cobj = {
        length : 10,
        breadth : 20,
        draw(){
            console.log("I am drawing in factory");
        }
    }
    return cobj;
}
let obj2 = createObj();
console.log(obj2.draw());


// constructor function
function constructorFunc(){
    this.length=20;
    this.breadth=21;
}
let obj3 = new constructorFunc();
console.log(obj3);