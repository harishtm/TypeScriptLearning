"use strict";
/*

TypeScript

1. Typed superset of JavaScript
2. Types are optional
3. Identify mistakes during development
4. Tool Support
5. TS = ES5 + ES6 + ES7 + Features

*/
// Different ways of declaration typescript variable 
// Type inference
var x = 10; // on hover of x shows number
var y = "hello"; //  on hover of y shows string
var z = true; // on hover gives z as boolean
// Explicit type
// For that we make use of annotations (:)
var xx = 10;
var yy = "Welcome to typescript"; // Initialization is not compulsory
var zz;
// Always better use type annotations rather than type inference to declare variables
// TypeScript features a new data type called "any"
var info;
info = 10;
info = "Hi";
info = true;
// Enumeration type
// if integer is not specified then enum will autogenerate numbers
var fruitsColor;
(function (fruitsColor) {
    fruitsColor[fruitsColor["Yellow"] = 1] = "Yellow";
    fruitsColor[fruitsColor["Green"] = 5] = "Green";
    fruitsColor[fruitsColor["Orange"] = 10] = "Orange";
})(fruitsColor || (fruitsColor = {}));
;
var myChoice = fruitsColor.Green;
console.log(myChoice);
console.log(fruitsColor[myChoice]);
