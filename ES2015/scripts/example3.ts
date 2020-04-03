/* Using var and let in javascript closure */

/* Use immediatly invoked function */
for(var i=1; i<=5; i++) {
    setTimeout(function(){console.log("Using var", i)}, 1000)
}

/* While delaing with closures in loops use let */ 
for(let i=1; i<=5; i++) {
    setTimeout(function(){console.log("Using let", i)}, 1000)
}
