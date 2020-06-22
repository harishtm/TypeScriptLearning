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

var xx: number = 10;
var yy: string = "Welcome to typescript"; // Initialization is not compulsory
var zz:boolean;