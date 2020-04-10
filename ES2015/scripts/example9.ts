/* Spread operator */

let displaytheme = function(type:string, ...values:string[]){
    console.log(type)
    for(let i in values){
        console.log(values[i])
    }
}


let animals = ["Lion", "Tiger", "Elephant"];
let fruits = ["Apple", "Orange", "Papaya"];
displaytheme("List of Animal", ...animals) // use of spread operator
displaytheme("List of Fruits", ...fruits) // use of spread operator

/* 

1. Rest operator is specified in "function declaration" where as 
   Spread operator is specified during "function call" 

2. Rest Parameter is collecting all remaining elements into an array .
   Spread Operator is unpacking collected elements such as arrays into single elements .

3. Rest Parameter [ …rest] "It is a collection of all remaining elements"
   (hence, the name rest, as in the rest of the elements) into an array.
   Spread Operator […spread] It’s the opposite to rest parameter ,
   where rest parameter collects items into an array,
   the "spread operator unpacks the collected elements into single elements".
   
*/


/* Rest operator */

var empname = ["John", "Donald", "Smith"];
const [firstName, ...familyName] =  empname;
console.log(firstName);
console.log(familyName)

/* Spread operator */

var emp_name = ["Scott", "Stiris", "Millar"];
var profile = [...emp_name, "Cricket", "28"];
console.log(profile)