"use strict";
/* forEach */
// In ES5
var numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(myarrayFunction);
function myarrayFunction(element, index, array) {
    console.log("arr[" + index + "]=" + element);
}
