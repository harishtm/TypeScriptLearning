/* Rest operator in ES6 or ES2015 */

let displayColors = function(){
    console.log(message)
    for(let i in arguments){
        console.log(arguments[i])
    }
}

let message = "list of colors"

displayColors(message, 'Red');
displayColors(message, 'Red', 'green');
displayColors(message, 'Red', 'green', 'blue')


/* Rest parameter represents in defenite number of arguments as an array */

let displayRestOperatorColors = function(rest_message:string, ...colors:string[]){
    console.log(rest_message, "====", colors, "====", arguments.length)
    for(let i in colors){
        console.log(colors[i])
    }
}

let rest_message = "list of colors"

displayRestOperatorColors(message, 'Red');
displayRestOperatorColors(message, 'Red', 'green');
displayRestOperatorColors(message, 'Red', 'green', 'blue')
