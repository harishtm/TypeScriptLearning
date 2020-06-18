// Generator

/* Generator functions are normal functions but preceded by asterisk(*)*/

function *createGenerator(){
    yield 1;
    console.log("After 1st yield");
    yield 2;
}

let myGen = createGenerator();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());

// Similar to iterators custom generators can aslo be defines

// below code will not log it has to be worked under ScratchJS chrome addon

let person_iter = {
    fname: "John",
    lname: "Smith"
};

person_iter[Symbol.iterator] = function*() {
    let obj_properties = Object.keys(person_iter);
    for(let t of obj_properties){
        yield this[t];
    }
}

for(let p of person_iter){
    console.log("=====", p)
}