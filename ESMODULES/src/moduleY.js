// Exporting functions and classes

export function greet(message){
    console.log(message)
}

export class GreetMessage {
    constructor(name){
        this.name = name
        console.log("Hello " + name)
    }
    greet() {
        console.log(this.name + "Welcome to ES2015/ES6 class module")
    }
}