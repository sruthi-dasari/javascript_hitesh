// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);

const bigNumber = 354658697078463577637666663733n

// Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "perman", "pikachu"]

// console.log(typeof bigNumber);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

// Stack (Primitive) ; Heap (Non-Primitive)
// Stack- you get a copy; Heap- you can a ReferenceError

let myName = "shruti"
let anotherName = myName

// console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    name : "shruti"
}

let userTwo = userOne

// console.log(userTwo);

userTwo.name = "chinnu"

console.log(userOne);
console.log(userTwo);


