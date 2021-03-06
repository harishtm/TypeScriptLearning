"use strict";
/*

Default functional parameter
Passing default value to function

*/
var case1 = function (x, y) {
    if (x === void 0) { x = 5; }
    if (y === void 0) { y = 6; }
    console.log("both as a default", x + y);
    console.log(arguments.length);
};
case1();
case1(20);
case1(20, 30);
case1(undefined, 30);
var case2 = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = value * 0.1; }
    console.log("default and arithmetic operation", value + bonus);
    console.log(arguments.length);
};
case2();
case2(20);
case2(20, 30);
var percentage = 0.5;
var case3 = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = value * percentage; }
    console.log("default and variable as argument", value + percentage);
    console.log(arguments.length);
};
case3();
case3(20);
case3(20, 30);
var percent = function () { return 0.75; };
var case4 = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = value * percent(); }
    console.log("default and function as argument", value + bonus);
    console.log(arguments.length);
};
case3();
case3(20);
case3(20, 30);
