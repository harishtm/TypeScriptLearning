// Maps

let mynewMap = new Map();

mynewMap.set("empname", "John Smith");
mynewMap.set("age", 30);


console.log(mynewMap.get("empname"));

// map can hold objects as keys

let obj_1 = {};
let obj_2 = {};

mynewMap.set(obj_1, 10);
mynewMap.set(obj_2, 20);

console.log(mynewMap.get(obj_1));
mynewMap.delete("empname");

mynewMap.clear();

console.log(mynewMap.size);
console.log(mynewMap.has('empname'))

/* Iterating Map use Scratch JS chrome extension to see the iteration*/

// To iterate only keys

for(let key of mynewMap.keys()){
    console.log("Key", key)
}

// To iterate only values

for(let value of mynewMap.values()){
    console.log("value", value)
}

// To get both key and value use entries

for(let entry of mynewMap.entries()) {
    console.log(`${entry[0]} -> ${entry[1]}`)
}

// To get both key and value use entries with destructuring 

for(let [key, value] of mynewMap.entries()) {
    console.log(`${key} -> ${value}`)
}
