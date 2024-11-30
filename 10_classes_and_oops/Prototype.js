// let myName = "shruti   "
// let myChannel = "chai    "

// console.log(myName.length);

// now if we want a method "trueLength" to print the actual length by removing extra spaces
// and with string like "trueLength is:" 

// So this is our challenge, we cannot do it now but in order to do this, we need to check something


// let myHeros = ["thor", "spiderman"]

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.shruti = function(){
//     console.log("shruti is present in all objects");
// }

// heroPower.shruti()
// myHeros.shruti()
// we can see that both have access to shruti

// Now if we create a prototype i array

// Array.prototype.heyShruti =function(){
//     console.log("Shruti says hello");
// }

// it should be accessible only to array, since we have given power only to array

// myHeros.heyShruti()
// heroPower.heyShruti()

/*********************************************************************************************** */

// prototypal inheritance (nut this is outdated)

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

// Now we go back and solve the challenge

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"shruti".trueLength()
"iceTea".trueLength()