"use strict";
/*

Default functional parameter
Passing default value to function

*/
var getDefaultValue = function (value) {
    if (value === void 0) { value = 10; }
    console.log(value);
};
getDefaultValue();
getDefaultValue(20);
