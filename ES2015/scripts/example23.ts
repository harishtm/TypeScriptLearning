let iterable = [1,2,3];

function createIterator(array:any){
    let count = 0;
    return {
        next: function() {
            // Ternary operator
            return count < array.length ?
            {value: array[count++], done:false}:
            {value: array[count], done:true}
        }
    }
}

let myIterator = createIterator(iterable);

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next()); // there is no stop iteration error

