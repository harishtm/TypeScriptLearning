"use strict";
/* forEach */
// In ES5
var numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(myarrayFunction);
function myarrayFunction(element, index, array) {
    console.log("arr[" + index + "]=" + element);
}
// In ES2015(ES6) - forEach with Map and Set
var myMapdata = new Map([["fname", "John"],
    ["lname", "Smith"]]);
myMapdata.forEach(displayMap);
function displayMap(value, key, callingMap) {
    console.log(key + " - " + value);
    console.log(myMapdata === callingMap);
}
// Similary for Set
// function will have 3 parameters
var mySet = new Set([1, 2, 3]);
// mySet.forEach(); // Will throw error as there is no argument to forEach
mySet.forEach(displaySet);
function displaySet(value, key) {
    console.log(key, " - ", value);
    console.log(mySet === callingSet);
}
