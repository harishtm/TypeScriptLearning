"use strict";
/* Destructuring Array in ES2015 */
var emp_array = ["John", "Smith", "Male"];
var emp_fname = emp_array[0], emp_lname = emp_array[1], gender = emp_array[2];
console.log(emp_fname);
console.log(emp_lname);
console.log(gender);
/* ===================================================== */
var emp_array1 = ["John", "Smith"];
var emp_fname1 = emp_array1[0], emp_lname1 = emp_array1[1], gender1 = emp_array1[2];
console.log(emp_fname1);
console.log(emp_lname1);
console.log(gender1);
/* ===================================================== */
var gender2 = emp_array[2];
console.log(gender2);
/* ===================================================== */
// Destructring with default values
//if Female is not passed then default value is displayed
var emp_array3 = ["John", "Smith", "Female"];
var emp_fname3 = emp_array3[0], emp_lname3 = emp_array3[1], _a = emp_array3[2], gender3 = _a === void 0 ? "Male" : _a;
/* ===================================================== */
// Destructring array using rest operator
var emp_array4 = ["John", "Smith", "Female"];
var emp_fname4 = emp_array3[0], elements = emp_array3.slice(1);
console.log(emp_fname4);
console.log(elements);
