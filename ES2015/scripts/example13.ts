/* Destructuring objects */

/*

Array destructring uses square braces []
Object destructring uses flower braces {}

*/

let account = {
    acnumber: "SBI789",
    actype: "Savings",
    branch: "Delhi"
}

let {acnumber, actype, branch} = account;

console.log(acnumber, actype, branch)