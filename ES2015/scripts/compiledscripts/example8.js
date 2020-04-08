"use strict";
/* Rest operator in ES6 or ES2015 */
var displayColors = function () {
    console.log(message);
    for (var i_1 in arguments) {
        console.log(arguments[i_1]);
    }
};
var message = "list of colors";
displayColors(message, 'Red');
displayColors(message, 'Red', 'green');
displayColors(message, 'Red', 'green', 'blue');
/* Rest parameter represents in defenite number of arguments as an array */
var displayRestOperatorColors = function (rest_message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(rest_message, "====", colors, "====", arguments.length);
    for (var i_2 in colors) {
        console.log(colors[i_2]);
    }
};
var rest_message = "list of colors";
displayRestOperatorColors(message, 'Red');
displayRestOperatorColors(message, 'Red', 'green');
displayRestOperatorColors(message, 'Red', 'green', 'blue');
