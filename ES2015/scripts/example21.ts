/* forEach */

// In ES5

var numbers = [1, 2,3,4,5,6];
numbers.forEach(myarrayFunction);
function myarrayFunction(element:any, index:any, array:any) {
    console.log("arr["+index+"]="+element);
}

// In ES2015(ES6) - forEach with Map and Set

let myMapdata = new Map([["fname", "John"],
                         ["lname", "Smith"]]);
myMapdata.forEach(displayMap);
function displayMap(value:any, key:any, callingMap:any){
    console.log(key +" - "+ value)
    console.log(myMapdata === callingMap)
}

