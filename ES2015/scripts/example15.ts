/* for of in ES2015 */

let colors = ["Red", "Blue", "Green"];

for(let index in colors){
    console.log(colors[index])
}

// In ES6 for of - read the element directly 
// Example for of with array and string (for of works with any iterable)
for(let color of colors){
    console.log(color)
}

let letters = "XYZ";
for(let letter of letters){
    console.log(letter)
}