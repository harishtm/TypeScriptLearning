"use strict";
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
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
        console.log(this.name + " Constructor");
    }
    Employee.dearnessAllowance = function () {
        console.log("Static Method");
    };
    Employee.prototype.greetEmployee = function () {
        console.log("Hello " + this.name);
    };
    return Employee;
}());
var emp = new Employee("John");
Employee.dearnessAllowance();
emp.greetEmployee();
