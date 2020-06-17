// Iterables and Iterators

/*

ES2015 introduces iteration which is a new way to traverse data and iteration revolves
arround two key concepts namely iterables and iterators.  

*/

/*

Iterable is any object that implements a method whose key is Symbol.Iterator

Iterator is an object that implement next method

*/

let iterable = [1,2,3];

function createIterator(array:any){
    let count = 0;
    return {
        next: function() {
            // Ternary operator
            return count < array.length ?
            {value: array[count++], done:false}:
            {value: array[count], done:true}
        }
    }
}

let myIterator = createIterator(iterable);

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next()); // there is no stop iteration error

// Need to check in chrome Scratch.js (below line of code)

let person_iter = {
    fname: "John",
    lname: "Smith"
};

// Plain javascript objects are not iterable they don't work "for of" loop by default

/* 

//Error occurs in this approach 

for(let p of person_iter){
    console.log(p)
}

// for of loop doesn't work by default

*/

// To make it work custom iterator

person_iter[Symbol.iterator] = function() {
    let obj_properties = Object.keys(person_iter);
    let count = 0;
    let isDone = false;
    let next = () => {
        if(count>=obj_properties.length) {
            isDone = true;
        }
        return { done: isDone, value: this[obj_properties[count++]]}
    }
    return {next};
}

for(let p of person_iter){
    console.log("=====", p)
}