// Understanding sets and maps

let mySet = Object.create(null);
mySet.id = 0; // check when value is true and 1
if(mySet.id) {
    console.log("id exists");
}

let myMap = Object.create(null);
myMap.name = "John";
let val = myMap.name;
console.log(val);

myMap[100] = "Hello";
console.log(myMap["100"]); // Accessing will be string can not be integer

let obj1 = {};
let obj2 = {};

myMap[obj1] = "World";

console.log(myMap[obj1]);
// toString representation of both objects obj1 and obj2 are same
console.log(obj1.toString(), obj2.toString())
console.log(obj1.toString() === obj2.toString())
