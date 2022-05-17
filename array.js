const array = ["a", "b", "c"];

// 1. array is a object
console.log(typeof [])
console.log(array["1"]);

// 2. toString() -> convert array to string with , seperate
console.log("To String: ", array.toString())

// 3. join() -> convert array to string with custom seperate
console.log("Join: ", array.join(" - "))

// 4. pop() -> cut last element return deleted element -> on nothing return undifined
console.log("Pop: ", array.pop() , array)

// 5. push() -> insert element to last index return length
console.log("Push: ", array.push("c"), array)

// 6. shift() -> cut first element return deleted element -> on nothing return undifined
console.log("Shift: ", array.shift() , array)

// 7. sunhift() -> insert element to first index return length
console.log("Unshift: ", array.unshift("a") , array)

// 8. splice() -> remove, or insert element from index
console.log("Splice: ", array.splice(2, 1), array); // remove
console.log("Splice: ", array.splice(2, 0, "c"), array); // insert

// 9, slice() -> return element from - to 
console.log("Slice: ", array.slice(0, 1), array)

// 10. concat() -> return array = connect array 
console.log("Concat: ", array.concat(["d"]), array)
