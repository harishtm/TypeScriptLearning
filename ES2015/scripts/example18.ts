/* class Inheritance in ES6 */

class Animal {
    constructor(){
        console.log("Has 4 Legs")
    }
    hasTail(){
        return true;
    }
}

class Chimps extends Animal{
    constructor(){
        super()
        console.log("Has 2 legs")
    }
    // if the method does not exists in the derived class the parent class method is used
    hasTail(){
        return false;
        // return super.hasTail(); // Get access to the parent class method 
    }
}

let animal_obj = new Chimps();
console.log(animal_obj.hasTail())