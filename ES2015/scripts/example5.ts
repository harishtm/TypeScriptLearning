/* Arrow functions 
    Simplyfies the behaviour of javascript
*/

var getValue = function(){
    return 10;
}

console.log("Regular function", getValue())

// =======================================================================================

// "=>" is called hat arrow (arrow functions in javascript)
// in ES2015 or ES6 use const instead of var

const getArrowValue = () => {
    return 20;
}

console.log("Arrow function", getArrowValue())

// =======================================================================================
// return and curly braces can be removed if it has single statement to return
// single statement within the body(function)

const getArrowSingleLiner = () => 10;

console.log("Single Liner", getArrowSingleLiner())

// =======================================================================================
// passing argument

const getArgument = (x: number) => x*10;

console.log("Passing argument", getArgument(20))

// =======================================================================================
// passing multiple argument

const getMultipleArgument = (x: number, y: number) => x+y;

console.log("Passing argument", getMultipleArgument(10, 20))

// it is a normal function as javascript but shorter way of writting it
console.log(typeof getMultipleArgument)