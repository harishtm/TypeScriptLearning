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

// Always better use type annotations rather than type inference to declare variables

// TypeScript features a new data type called "any"

var info;
info = 10;
info = "Hi";
info = true;


// Enumeration type

// if integer is not specified then enum will autogenerate numbers
enum fruitsColor  {Yellow=1, Green=5, Orange=10};

var myChoice = fruitsColor.Green

console.log(myChoice);
console.log(fruitsColor[myChoice]);

// Array and Tuple type

let strArr1: string[] = ["hi", "welcome", "to", "ts", "data", "types"];
let strArr2: Array<string> = ["hello", "world"];
let numArr3: number[] = [1,2,3,4,5];
// (or)
let numArr4: number[];
numArr4 = [7,8,9];

console.log("Array type declaration", strArr1, strArr2, numArr3)

let anyArray: any[] = ["hi", 10, true];

// To have a heterogeneous collections we use tuple

let myTuple: [string, number] = ["hi", 10];
console.log("Tuple 1", myTuple[0]);
console.log("Tuple 2", myTuple[1]);
