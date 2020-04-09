"use strict";
/* Spread operator */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var displaytheme = function (type) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    console.log(type);
    for (var i_1 in values) {
        console.log(values[i_1]);
    }
};
var animals = ["Lion", "Tiger", "Elephant"];
var fruits = ["Apple", "Orange", "Papaya"];
displaytheme.apply(void 0, __spreadArrays(["List of Animal"], animals)); // use of spread operator
displaytheme.apply(void 0, __spreadArrays(["List of Fruits"], fruits)); // use of spread operator
/*

1. Rest operator is specified in "function declaration" where as
   Spread operator is specified during "function call"

2. Rest Parameter [ …rest] "It is a collection of all remaining elements"
   (hence, the name rest, as in the rest of the elements) into an array.
   Spread Operator […spread] It’s the opposite to rest parameter ,
   where rest parameter collects items into an array,
   the "spread operator unpacks the collected elements into single elements".
   
*/ 
