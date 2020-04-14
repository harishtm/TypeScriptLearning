/* Class in ES2015 */

// Hoisting is JavaScript's default behavior of moving declarations to the top.

// let p1 = new Person() // Not allowed - Error - class 'Person' used before its declaration.

class Person{
    greet(){

    }
}

let pobj = new Person();

console.log(typeof Person) // function

// class are function but the only difference is classes unlike functions are not hoisted

foo() // Hoisting called before declaration

function foo(){
    console.log("Hello")
}

foo()

console.log(pobj.greet === Person.prototype.greet)