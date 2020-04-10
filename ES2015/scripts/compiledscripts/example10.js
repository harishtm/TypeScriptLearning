"use strict";
/* ES6 Object literal */
var fname = "John";
var lname = "Smith";
/* curly braces with properties is called an object literals */
var person = {
    fisrtName: fname,
    lastName: lname
};
console.log(person.fisrtName, person.lastName);
/* ES6 provides short hand notation for object literal

1. objects with properties with same name
2. even during return from function no need to follow firstName: firstName
    when it is with same name
3. short hand notation for function
*/
var my_fisrt_name = "John", my_last_name = "Smith";
var new_person = {
    my_fisrt_name: my_fisrt_name,
    my_last_name: my_last_name
};
console.log(new_person.my_fisrt_name, new_person.my_last_name);
function createPerson(firstName, lastName, age) {
    var fullName = firstName + " " + lastName;
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        isSenior: function () {
            return age > 60;
        },
        isSuperSenior: function () {
            return age > 75;
        }
    };
}
var p = createPerson("John", "Smith", 60);
console.log(p.firstName, p.lastName, p.fullName, p.isSenior(), p.isSuperSenior());
