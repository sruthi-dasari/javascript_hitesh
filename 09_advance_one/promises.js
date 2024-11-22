// //first example
// const promiseOne = new Promise(function(resolve, reject){
//     // do an async task
//     //DB calls, cryptography, network

//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise is consumed"); 
// })

// // we can write in this way also
// //second example

// new Promise(function(resolve, reject){

//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
    
// }).then(function(){
//     console.log("Async 2 got resolved");
// })

// third example

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "shruti",email: "shruti@example.com"})
//     }, 1000)
// }).then(function(user){
//     console.log(user); 
// })

// resolve is directly connected to then. If we want to consume anything, we write in resolve, and it goes
// to then, for eg here it goes to then, and stores data in variable named user.

//fourth example

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false

//         if(!error){
//             resolve({username:"shruti", password: "123"})
//         }else{
//             reject("ERROR: Something went wrong!")
//         }
//     }, 1000)
// })

// // here whatever you return goes to next ".then"
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username); 
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise either got resolved or rejected");
// })


// we can handle promises through async await also
// one problem with this approach -> it doesnt handle error gracefully

// fifth example

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true

//         if(!error){
//             resolve({username:"javascript", password:"123"})
//         }else{
//             reject("ERROR: JS went wrong !!!")
//         }
//     }, 1000)
// })

// // this is one way
// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response);   
// }

// consumePromiseFive()

// here we can see how async await doesn't handle error properly, if we keep error = true, and see the
// output, it shows that error has not been handled properly with catch

// //this is another way
// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response); 
//     }catch(error){
//         console.log(error);
//     }
// }

// consumePromiseFive()

// here we can see that, by using try catch block we can handle errors gracefully.


// handling json data

//using try catch method

// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log("E:", error);
//     }
// }

// getAllUsers()

//using .then catch format

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data) => console.log(data)
)
.catch((error) => console.log(error)
)

// in the above format, we dont need to wait, since after first then completes then only it goes to next then