// 1. 1 function - 1 task
// 2. name rule -> a-z A-Z 0-9 number can't be first, lowercase first
function myFunction1() {}

// 3. Arguments
function logMessage(message) {
  console.log("Arguments: ", message);
}
logMessage("This is message!");

function logArgument() {
  console.log("Arguments: ", arguments);
}
logArgument(1, 2, 3, 4, 5, 6);

// 4. function type
    // - Declearation function
    function DeclearationFunction() {}
    // - Expression function
    const expressionFunction1 = function () {};
    const expressionFunction2 = function eF() {};
    // - Arrow function
    const arrowFunction = () => {};
