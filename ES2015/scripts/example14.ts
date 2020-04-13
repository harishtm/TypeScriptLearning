/* String template in ES2015 */

let user = "John";
let greet = "Welcome" + user + " to ES2015";

// With string templates with backticks and flower brace for variables b/w backticks

let greet_new = `Welcome ${user} to ES2015`;

// Allows double and single quotes and multi line support 

let grt = `Welcome 'single', "doble quotes text" ${user} ES2015
                    test the string
                    white space are significant
                    in console also white space will exists 
`;

console.log(greet, "====", greet_new)
console.log(grt);
