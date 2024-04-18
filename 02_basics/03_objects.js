// singleton (if objects are made with contructors not literals)
// Object.create

//Object literals
const JSUser = {
    name: "Shruti",
    age: 27,
    "full name": "shruti dasari",
    location: "Bilaspur",
    email: "shruti@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(JSUser.email); 
console.log(JSUser["full name"]); //array notation can be used to access keys which have space




