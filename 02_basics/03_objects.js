// singleton (if objects are made with contructors not literals)
// Object.create

//Object literals

const mySym = Symbol("key1")

const JSUser = {
    name: "Shruti",
    age: 27,
    "full name": "shruti dasari",
    [mySym]: "mykey1", // we should declare symbols like this
    location: "Bilaspur",
    email: "shruti@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JSUser.email); 
// console.log(JSUser["full name"]); //array notation can be used to access keys which have space
// console.log(typeof JSUser[mySym]); // to access symbols

// we can freeze objects so that values cannot be changed

// Object.freeze(JSUser)
// JSUser.email = "shruti@micro.com"
// console.log(JSUser);

// how to add functions in our object

JSUser.greeting = function(){
    console.log("Hello js user!");
}

// console.log(JSUser);


JSUser.greetingTwo = function(){
    console.log(`Hello js ${this.name}!`); // we can add values inside string using this syntax (string interpolation)
    // we can use "this" here to refer keys of same object 
}

// console.log(JSUser.greeting); //here we are printing only function reference
// JSUser.greeting(); //here we are printing function definition
JSUser.greetingTwo();