// const user = {
//     username: "Sruthi",
//     loginCount: 10,
//     signIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from database");
//         // console.log(`Username: ${this.username}`); //by using this we mention here that we're talking about current context
//         console.log(this); //we can see current context here
        
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());

/*************************************************************************************/

// constructor functions

// If we want to create another user, instead to writing it again and changing values,
// we use constructor functions

function User(username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    // return this
    // we can omit writing return also, since it implicitly returns this
}

// const userOne = User("Shruti", 10, true)
// console.log(userOne);

// check this, if we want to create another object like:

// const userTwo = User("Chai", 11, false)

// console.log(userOne);

// here we can see that if we print userOne, the values got chnged now, this we do not want,
// therefore we use constructor functions 

// constructor functions gives an instance everytime

const userOne = new User("Shruti", 10, true)
const userTwo = new User("Chai", 11, false)
// console.log(userOne);

//can we print constructor?

console.log(userOne.constructor);




