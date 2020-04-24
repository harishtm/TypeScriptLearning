"use strict";
// Understanding sets and maps
var mySet = Object.create(null);
mySet.id = 0; // check when value is true and 1
if (mySet.id) {
    console.log("id exists");
}
var myMap = Object.create(null);
myMap.name = "John";
var val = myMap.name;
console.log(val);
myMap[100] = "Hello";
console.log(myMap["100"]); // Accessing will be string can not be integer
var obj1 = {};
var obj2 = {};
myMap[obj1] = "World";
console.log(myMap[obj1]);
// toString representation of both objects obj1 and obj2 are same
console.log(obj1.toString(), obj2.toString());
console.log(obj1.toString() === obj2.toString());
var myNewSet = new Set();
var obj3 = {};
var obj4 = {};
myNewSet.add("Hello");
myNewSet.add(1);
myNewSet.add(1); // Will be not be added as 1 is repeated
myNewSet.add(obj3); // since it is not converted to toString obj3 and obj4 are not identical
myNewSet.add(obj4);
console.log(myNewSet.size);
var newSet = new Set([1, 2, 3, 4, 4, 4]);
console.log("Size of new set ", newSet.size); // 4 as other values are repeated
var chainSet = new Set().add("Hello").add("World");
console.log("Size of chain set", chainSet.size);
newSet.delete(1); // deleting an element from set
console.log("After delete", newSet.size);
console.log("To check the value in the set", newSet.has(2)); // returns true or false
