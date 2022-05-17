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

// --------------------------------------------- Loop

// 11. forEach -> loop all value of array -> nothing return
array.forEach((value) => {
  console.log("For each", value);
});

// 12. every -> every property satisfy condition -> return boolean 
const isSatisfyEvery = array.every((value, index) => {
  return value === "a";
});
console.log("Is satisfy every: ", isSatisfyEvery);

// 13. some -> some property satisfy condition -> return boolean 
const isSatisfySome = array.some((value, index) => {
    return value === "a";
});
console.log("Is some every: ", isSatisfySome);

// 13. find -> find one element satisfy condition -> return value
const find = array.find((value, index) => {
    return value === "a";
});
console.log("Find :", find);

