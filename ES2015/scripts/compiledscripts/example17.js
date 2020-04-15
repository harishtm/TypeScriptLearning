"use strict";
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
        console.log(this.name + " Constructor");
    }
    return Employee;
}());
var emp = new Employee("John");
