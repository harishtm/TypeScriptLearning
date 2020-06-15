// Symbols (new primitive type in ES2015/ES6)


// Symbol can not be used with new 

let s = Symbol("First Symbol");

// ES2015 has a new type "symbol"

console.log(typeof(s))
console.log(s.toString())

let s2 = Symbol("Test");
let s3 = Symbol("Test");

// Symbol always create a unique id
console.log(s2 === s3) // false

/* 
    Symbol registry - it can be use the same Symbol again in a different or a same file 
    for that purpose we have a Symbol registry 
*/

let s4 = Symbol.for("RegistrySymbol");
let s5 = Symbol.for("RegistrySymbol");

/* 
    Symbol.for does not add the symbol right away it checks for the Symbol with the key    
    "RegistrySymbol" already exist in the registry if it does it will return that symbol
    s4. If it does not exist it will create in the Symbol registry
*/

console.log(s4 == s5)
console.log(Symbol.keyFor(s4));

let f_name = Symbol();
let p_person = {
    [f_name]: "John"
};
console.log(Object.getOwnPropertyNames(p_person));
console.log(Object.getOwnPropertySymbols(p_person));

// Built in Symbol Iterator - Iterator method

let str = "Hello";
let arr = [1,2,3];
let snum = 5
let sobj = {name: "John"};


console.log("For string", typeof(str[Symbol.iterator]));
console.log("For array", typeof(arr[Symbol.iterator]));
console.log("For number", typeof(snum[Symbol.iterator]));
console.log("For object", typeof(sobj[Symbol.iterator]));
