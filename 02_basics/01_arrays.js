// array

// const myArr = [0,1,2,3,4,5]

// we do shallow copy in arrays
// shallow copy shares same reference point (value gets change)

//ways of declaring arrays

const myArr2 = [2,3,4,5]

const myArr3 = new Array(1,2,3,4)

// console.log(myArr3)


// array methods

// myArr.unshift(9) // adds value at start
// myArr.shift() // removes value from start
// console.log(myArr)

// console.log(myArr.includes(12)); 
// console.log(myArr.indexOf(18)); //if value is not present it prints -1


// newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr); // join binds two arrays also converts it into string

//  diff between slice and splice

const myArr = [0,1,2,3,4,5]

console.log("A", myArr);
myn1 = myArr.slice(1,3)
console.log(myn1); // slice does not include last range, also doesn't change original array
console.log(myArr);


// console.log("B", myArr);
myn2 = myArr.splice(1,3)
// console.log(myn2);
// console.log("C", myArr); // splice not only includes last range but also changes original array
