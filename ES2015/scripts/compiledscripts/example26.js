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
