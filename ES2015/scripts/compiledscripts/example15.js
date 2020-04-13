"use strict";
/* for of in ES2015 */
var colors = ["Red", "Blue", "Green"];
for (var index in colors) {
    console.log(colors[index]);
}
// In ES6 for of - read the element directly 
// Example for of with array and string (for of works with any iterable)
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var color = colors_1[_i];
    console.log(color);
}
var letters = "XYZ";
for (var _a = 0, letters_1 = letters; _a < letters_1.length; _a++) {
    var letter = letters_1[_a];
    console.log(letter);
}
