// Decorators in TypeScript

/*
    All the decorators are expereimental features in TS and may change in feture release

    To enable this change in tsconfig.json
    "experimentalDecorators": true
*/

/*
    A Decorator is a special kind of declaration that can be attached to a class declaration,
    method, accessor, property, or parameter.
    Decorators use the form @expression, where expression must evaluate to a function that
    will be called at runtime with information about the decorated declaration.
*/


function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter{
    greeting: string;
    constructor(message: string){
        this.greeting = message
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

console.log(new Greeter("John").greet())


// example of how to override the constructor.

function classDecorator<T extends {new(...args:any[]): {}}> (constructor: T){
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class MyGreeter {
    property = "welcome to decorator";
    hello: string = "simple decorator";
    constructor(m:string) {
        this.hello = m
        console.log("In derived class", this.hello)
    }
}

console.log("Overriding constructor", new MyGreeter("Welcome"))