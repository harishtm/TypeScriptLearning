/*

Default functional parameter
Passing default value to function

*/

let case1 = function(x=5, y=6){
    console.log("both as a default", x+y);
    console.log(arguments.length)
}

case1()
case1(20)
case1(20, 30)
case1(undefined, 30)


let case2 = function(value=10, bonus=value*0.1){
    console.log("default and arithmetic operation", value+bonus);
    console.log(arguments.length)
}

case2()
case2(20)
case2(20, 30)

let percentage = 0.5;

let case3 = function(value=10, bonus=value*percentage){
    console.log("default and variable as argument", value+percentage);
    console.log(arguments.length)
}

case3()
case3(20)
case3(20, 30)

const percent = () => 0.75;

let case4 = function(value=10, bonus=value*percent()){
    console.log("default and function as argument", value+bonus)
    console.log(arguments.length)
}

case3()
case3(20)
case3(20, 30)
