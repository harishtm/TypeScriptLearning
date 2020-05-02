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