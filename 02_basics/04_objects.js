// const tinderUser = new Object() // singleton object
// const tinderUser = {} // non-singleton object
// console.log(tinderUser);

const tinderUser = {
    id: "abc123",
    name: "shruti",
    isLoggedIn: false
}

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shruti",
            lastname: "dasari"
        }
    }
}


// console.log(regularUser.fullname.userfullname);

// ways of combining objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1,obj2}

const obj3 = Object.assign({}, obj1, obj2) // empty {} is here target object
                                           // if {} not given then first parameter is treated as target  
// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); // here we get keys and values in arrays
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// object destructuring video notes starts here


course = {
    coursename: "js in hindi",
    courseInstructor: "hitesh",
    price: 999
}

const {courseInstructor: instructor} = course

console.log(instructor);

const navbar = ({company}) =>{

}

navbar(company = "hitesh")

// json api

// {
//     "name": "hitesh",
//     "coursename": "json in hindi",
//     "price": "free"
// }