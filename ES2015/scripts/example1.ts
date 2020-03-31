/*

Hoisting is a JavaScript mechanism where variables and function declarations are moved 
to the top of their scope before code execution.
Inevitably, this means that no matter where functions and variables are declared,
they are moved to the top of their scope regardless of whether their scope is global or local.

*/


function greetMessage(name: any){
    if(name == "John"){
        var msg = "Hello " + name;
    } else {
        var msg = "Hello there"
    }
    console.log(msg)
}

greetMessage("John")