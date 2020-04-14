
// Hoisting is JavaScript's default behavior of moving declarations to the top.

/*
1. Hoisting
2. Functional scope
*/

/*
Hoisting is a JavaScript mechanism where variables and function declarations are moved 
to the top of their scope before code execution.
Inevitably, this means that no matter where functions and variables are declared,
they are moved to the top of their scope regardless of whether their scope is global or local.
*/

/* "var" declaration is function scope */

function greetMessage(name: any){

    /* var declaration has functional scope the value will be accessible within the function*/

    if(name == "John"){
        var msg = "Hello " + name;
    } else {
        var msg = "Hello there"
    }
    console.log(msg)
    // var msg; 
    /* this is called hositing as the variable 
       can also be declared at the bottom
       (any var declaration is going to be moved to the very top of the function) */
}

greetMessage("John")