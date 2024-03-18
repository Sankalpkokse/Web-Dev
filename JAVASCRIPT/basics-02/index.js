// 1: normal object creation 
// object creation by factory method
// object creation by constructor method
// 

// primitive vs referenced type 

function addValue(num, obj){
    num++;
    obj.num1++;
}

let num = 10;
let obj = {
    num1: 20,
};


addValue(num,obj);
console.log(num);
console.log(obj.num1);

// iterating through objects
// find a key in object
// object cloning