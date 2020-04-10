"use strict";
/*

Object literal

1. In ES2015 it is possible to have spaces in object properties only
   condition is to be enclosed within quotes and can't be used in dot notation
2. object properties can also use variable name but enclose with square bracket

*/
var _a;
var ln = "last name";
var personObject = (_a = {
        "first name": "John"
    },
    _a[ln] = "Smith",
    _a);
console.log(personObject["first name"]); // can not be accessed with dot notation
console.log(personObject);
