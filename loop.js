const array = ["a", "b", "c"];
const string = "JS"
// 1. For in -> get key
for (const key in array) {
   console.log("For in object", key)
}

for (const key in string) {
    console.log("For in string", key)
}
// 1. For of -> get value
for (const value of array) {
    console.log("For of", value)
 }

for (const value of string) {
    console.log("For of string", value)
}