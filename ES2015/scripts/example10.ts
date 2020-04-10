/* ES6 Object literal */

let fname = "John";
let lname = "Smith";


/* curly braces with properties is called an object literals */
let person = {
    fisrtName: fname,
    lastName: lname
}

console.log(person.fisrtName, person.lastName)


/* ES6 provides short hand notation for object literal 

1. objects with properties with same name
2. even during return from function no need to follow firstName: firstName
    when it is with same name
3. short hand notation for function
*/

let my_fisrt_name = "John", my_last_name = "Smith";

let new_person = {
    my_fisrt_name,
    my_last_name
}

console.log(new_person.my_fisrt_name, new_person.my_last_name)


function createPerson(firstName: string, lastName: string, age: number){
    let fullName = firstName + " " + lastName;
    return {
        firstName,
        lastName,
        fullName,
        isSenior: function(){ // Normal function style
            return age>60;
        },
        isSuperSenior(){ // Short hand function style within an object in ES6
            return age>75;
        }
    }
}


let p = createPerson("John", "Smith", 60);
console.log(p.firstName, p.lastName, p.fullName, p.isSenior(), p.isSuperSenior())