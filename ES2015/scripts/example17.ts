/* 

Class body and method definition 

Note: In ES2015 and not TypeScript a class body can contain only methods and not properties

*/


/* 

1. Constructor method - Is used for creating and initializing an object and for every class
                        there can only be one constructor.

2. Static Method - Which can be called without instantiating a class 
                   It can not be called with object

3. Prototype Method - Which can be called with each object
*/

class Employee{
    constructor(name:string){
        this.name = name;
        console.log(this.name + " Constructor")
    }

    static dearnessAllowance(){
        console.log("Static Method")
    }
    greetEmployee(){
        console.log("Hello " + this.name)
    }
}

let emp = new Employee("John");
Employee.dearnessAllowance();
emp.greetEmployee()