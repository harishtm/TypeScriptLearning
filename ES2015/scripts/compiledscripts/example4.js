"use strict";
/*
const

1. used to create read only named constants
2. similar to let keyword in the sense that const declarations are also
    block scoped and they are not hoisted
3. a value must be mandatorly set with const declaration and this value can't be
   changed at the later point within the same scope
*/
var num;
// const decalration must be initialized
var num2 = 10;
var obj = {
    name: 'Smith'
};
console.log(obj.name);
// obj = {} // can't assign new obj because it is a constant
obj.name = "John"; // but can be assigned to a property of an object
console.log(obj.name);
