/* Destructuring Array in ES2015 */

let emp_array = ["John", "Smith", "Male"];
let [emp_fname, emp_lname, gender] = emp_array;

console.log(emp_fname);
console.log(emp_lname);
console.log(gender)

/* ===================================================== */
let emp_array1 = ["John", "Smith"];
let [emp_fname1, emp_lname1, gender1] = emp_array1;

console.log(emp_fname1);
console.log(emp_lname1);
console.log(gender1)

/* ===================================================== */

let [, , gender2] = emp_array;

console.log(gender2)

/* ===================================================== */

// Destructring with default values
//if Female is not passed then default value is displayed

let emp_array3 = ["John", "Smith", "Female"];
let [emp_fname3, emp_lname3, gender3="Male"] = emp_array3;

/* ===================================================== */

// Destructring array using rest operator

let emp_array4 = ["John", "Smith", "Female"];
let [emp_fname4, ...elements] = emp_array3;

console.log(emp_fname4)
console.log(elements)