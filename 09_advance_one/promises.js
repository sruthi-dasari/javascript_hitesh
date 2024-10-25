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

//third example

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "shruti",email: "shruti@example.com"})
//     }, 1000)
// }).then(function(user){
//     console.log(user); 
// })

//fourth example

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false

        if(!error){
            resolve({username:"shruti", password: "123"})
        }else{
            reject("ERROR: Something went wrong!")
        }
    }, 1000)
})

// here whatever you return goes to next ".then"
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username); 
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise either got resolved or rejected");
})


