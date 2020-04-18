"use strict";
/* class Inheritance in ES6 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
        console.log("Has 4 Legs");
    }
    Animal.prototype.hasTail = function () {
        return true;
    };
    return Animal;
}());
var Chimps = /** @class */ (function (_super) {
    __extends(Chimps, _super);
    function Chimps() {
        var _this = _super.call(this) || this;
        console.log("Has 2 legs");
        return _this;
    }
    // if the method does not exists in the derived class the parent class method is used
    Chimps.prototype.hasTail = function () {
        return false;
        // return super.hasTail(); // Get access to the parent class method use super
    };
    return Chimps;
}(Animal));
var animal_obj = new Chimps();
console.log(animal_obj.hasTail());
