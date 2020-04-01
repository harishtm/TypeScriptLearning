/*

var v/s let 

var declaration is hoisted and functional scope
let (ES2015/ES6) declaration are not hoisted and block scope

*/

/*

function greetMessage(name: any){
    if(name === "John"){
        let msg = "Hello" + name;
    } else {
        let msg = "Hello there"
    }
    console.log(msg)
}

In the above example "msg" throws error Can't find msg as variable msg is block scoped
here first let is scoped to if block and second let is scoped to else block
"msg" is outside the scope of the let declaration and hence it does not reference any thing

var declaration gives functional scope where as let declaration gives block scope

*/

function greetNewMessage(name: any){
    let msg;
    if(name === "John"){
        msg = "Hello" + name;
    } else {
        msg = "Hello there"
    }
    console.log(msg)
    // let msg; you can't use variable before declaration  as in var
}

greetNewMessage("John")


var a = 1;
var b = 2;
if (a == 1){
    var a = 10;
    let b = 20;
    console.log(a) // 10
    console.log(b) // 20 as it is block scope
}
console.log(a) // 10 function scope
console.log(b) // 2 function scope value



/*
var a = 1;
var a = 10; //allowed

let x = 5;
let x = 10; // not allowed can't redeclared block scoped variable
*/


/*

Allowed but not recommended

function greetNewMessage(name: any){
    let msg;
    if(name === "John"){
        let msg = "Hello" + name;
    } else {
        let msg = "Hello there"
    }
    console.log(msg);
}

greetNewMessage("John")


*/