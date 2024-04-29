function sayMyName(){ //function declaration
    console.log("S"); //
    console.log("H"); // 
    console.log("R"); // function definition 
    console.log("U"); // 
    console.log("T"); // 
    console.log("I"); //
}

// function reference
// sayMyName
// function execution
// sayMyName()

// function addTwoNumbers(number1, number2){ //function parameters
//     console.log(number1 + number2);
// }

// addTwoNumbers(1,2) // function arguments

function addTwoNumbers(number1, number2){ //function parameters
    return(number1 + number2);

    console.log("shruti"); //whatever u write after return it will not execute
}

const result = addTwoNumbers(1,2)

console.log("Result:", result);
