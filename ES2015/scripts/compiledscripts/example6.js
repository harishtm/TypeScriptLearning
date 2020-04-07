"use strict";
/* Understanding "this" in javascript */
var employee = {
    id: 1,
    greet: function () {
        console.log(this.id);
    }
};
employee.greet();
/*

In setTimeout function it creates its own context for "this" keyword
"this" keyword is bound to function within setTimeout
setTimeout(function(){console.log(this.id)}, 1000)
which doesn't have the context of outer function
*/
var employee1 = {
    id: 10,
    greet: function () {
        var self = this;
        setTimeout(function () { console.log(self.id); }, 1000);
    }
};
console.log(employee1.greet());
/* With Arrow function */
/*

When ever using Arrow functions it is not going to create its own "this"
"this" is referring to be be parent "this" not its own value

So when ever you want to use the "this" keyword from the execution context
make use of arrow function

So if you want seperate "this" for the function itself then don't use Arrow function
use regular JavaScript functions

Solving the problem that is caused by "this" keyword inside a function

*/
var employee2 = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () { console.log(_this.id); }, 1000);
    }
};
console.log(employee2.greet());
