/*

1. Module import are hoisted
2. imports are read only

*/
import {basic, da} from './moduleB.js';

// let da = 15 // can not be done as imports are read only
let salry = basic + (basic) * da/100;

console.log(`Salary = ${salry}`)


/* import using alias

import {basic as b, da as d}
let salry = b + (b) * d/100;
console.log(`Salary = ${salry}`)
*/