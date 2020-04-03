"use strict";
/* Using var and let in javascript closure */
/* Use immediatly invoked function */
for (var i = 1; i <= 5; i++) {
    setTimeout(function () { console.log("Using var", i); }, 1000);
}
var _loop_1 = function (i_1) {
    setTimeout(function () { console.log("Using let", i_1); }, 1000);
};
/* While delaing with closures in loops use let */
for (var i_1 = 1; i_1 <= 5; i_1++) {
    _loop_1(i_1);
}
