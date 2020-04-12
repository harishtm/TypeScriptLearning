"use strict";
/* Destructuring objects */
/*

Array destructring uses square braces []
Object destructring uses flower braces {}

*/
var account = {
    acnumber: "SBI789",
    actype: "Savings",
    branch: "Delhi"
};
var acnumber = account.acnumber, actype = account.actype, branch = account.branch;
console.log(acnumber, actype, branch);
// aliasing object names
var acn = account.acnumber, act = account.actype, br = account.branch;
console.log("aliasing", acn, act, b);
