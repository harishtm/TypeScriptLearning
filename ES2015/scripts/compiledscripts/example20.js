"use strict";
// Maps
var mynewMap = new Map();
mynewMap.set("empname", "John Smith");
mynewMap.set("age", 30);
console.log(mynewMap.get("empname"));
// map can hold objects as keys
var obj_1 = {};
var obj_2 = {};
mynewMap.set(obj_1, 10);
mynewMap.set(obj_2, 20);
console.log(mynewMap.get(obj_1));
mynewMap.delete("empname");
mynewMap.clear();
console.log(mynewMap.size);
console.log(mynewMap.has('empname'));
/* Iterating Map use Scratch JS chrome extension to see the iteration*/
// To iterate only keys
for (var _i = 0, _a = mynewMap.keys(); _i < _a.length; _i++) {
    var key_1 = _a[_i];
    console.log("Key", key_1);
}
// To iterate only values
for (var _b = 0, _c = mynewMap.values(); _b < _c.length; _b++) {
    var value = _c[_b];
    console.log("value", value);
}
// To get both key and value use entries
for (var _d = 0, _e = mynewMap.entries(); _d < _e.length; _d++) {
    var entry = _e[_d];
    console.log(entry[0] + " -> " + entry[1]);
}
// To get both key and value use entries with destructuring 
for (var _f = 0, _g = mynewMap.entries(); _f < _g.length; _f++) {
    var _h = _g[_f], key_2 = _h[0], value = _h[1];
    console.log(key_2 + " -> " + value);
}
