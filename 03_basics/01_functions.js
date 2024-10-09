// function execution

// function sayMyName(){ //function declaration
//     console.log("S"); //
//     console.log("H"); // 
//     console.log("R"); // function definition 
//     console.log("U"); // 
//     console.log("T"); // 
//     console.log("I"); //
// }

// function reference
// sayMyName
// function execution
// sayMyName()

// *******************************************************************************************

//function parameters

// function addTwoNumbers(number1, number2){ //function parameters
//     console.log(number1 + number2);
// }

// addTwoNumbers(1,2) // function arguments

// **************************************************************************************

// return statement

// function addTwoNumbers(number1, number2){ //function parameters
//     return(number1 + number2);

//     console.log("shruti"); //whatever u write after return it will not execute
// }

// const result = addTwoNumbers(1,2)

// console.log("Result:", result);

// ***************************************************************************************

//functions with objects and arrays

// function calculateCartPrice(...num1){ //rest operator
//     return num1
// }

// console.log(calculateCartPrice(10,20,30));  

// const user = {
//     username: "shruti",
//     price: "199"
// }

// function handleAnyObject(anyObject){
//     console.log(`Username is ${anyObject.username} price is ${anyObject.price}`);
// }

// handleAnyObject(user)

// // directly passing object
// handleAnyObject({
//     username: "sam",
//     price:"200"
// })

// const newArr = [50,30,20,60]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// console.log(returnSecondValue(newArr));

// console.log(returnSecondValue([20,100,3000]));