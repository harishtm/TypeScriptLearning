"use strict";
/* String template in ES2015 */
var user = "John";
var greet = "Welcome" + user + " to ES2015";
// With string templates with backticks and flower brace for variables b/w backticks
var greet_new = "Welcome " + user + " to ES2015";
// Allows double and single quotes and multi line support 
var grt = "Welcome 'single', \"doble quotes text\" " + user + " ES2015\n                    test the string\n                    white space are significant\n                    in console also white space will exists \n";
console.log(greet, "====", greet_new);
