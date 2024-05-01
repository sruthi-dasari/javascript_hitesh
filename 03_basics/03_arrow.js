const user = {
    username: "shruti",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // this usually refers to current context, context simply means value, so current value
        // console.log(this);
    }
}

// user.welcomeMessage()

//Now if we change the context

user.username = "Renu"
// Now it refers to current context that we changed recently
// user.welcomeMessage()

// console.log(this); 

// when we try to do console.log(this) in browser, we can see the first object coming is window object,
// since global object is window object

// function chai(){
//     const username = "shruti"
//     console.log(this.username); // it gives undefined since this can only be used in objects and not functions (except arrow functions)
// }

// if try to write function as variable, still it doesnt work there too, for eg

// const chai = function(){
//     const username = "shruti"
//     console.log(this.username); 
// }

// const chai = () =>{
//     const username = "shruti"
//     console.log(this); 
// }

// chai()

// ***** more on arrow functions*******

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }

// another way of writing arrow function (implicit function)
 
// const addTwo = (num1, num2) => num1+num2

// if you want to return just a value, you can wrap it in paranthesis
// const addTwo = (num1, num2) => (num1+num2)

// but if want to return an object, you should wrap it in curly braces
const addTwo = (num1, num2) => ({username: "shruti"})

console.log(addTwo(2,3));