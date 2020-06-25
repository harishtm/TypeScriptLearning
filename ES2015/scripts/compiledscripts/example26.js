"use strict";
// Different ways of creating constructors in ts
var Fruit = /** @class */ (function () {
    function Fruit(color, shape) {
        this.color = color;
        this.shape = shape;
    }
    return Fruit;
}());
// The Above code can be wriiten in short (mostly used in Angular)
var FFruit = /** @class */ (function () {
    function FFruit(color, shape) {
        this.color = color;
        this.shape = shape;
        this.color = color;
        this.shape = shape;
    }
    return FFruit;
}());
// create a variable of type interface
// if any of the property is not defined throws error
var apple = {
    colour: "red",
    shape: "round",
    avgweight: 100
};
var mango = {
    colour: "yellow",
    shape: "oval"
};
// In the above varibale we have not use avgweight property 
