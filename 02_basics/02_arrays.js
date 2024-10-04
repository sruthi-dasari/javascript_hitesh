// ways of combining arrays

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// push
// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // push modifies existing array
// console.log(marvel_heros[3][0]);

// concat
// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros); // concat returns new array

// spread operator
// const all_new_heros = [...marvel_heros, ...dc_heros] // using spread operator
// console.log(all_new_heros);

// const anotherArr = [1,2,[3,4,[7,8,[3,4]]]]

// const real_another_arr = anotherArr.flat(1)
// const real_another_arr = anotherArr.flat(Infinity)
// console.log(real_another_arr);

// console.log(Array.isArray("Shruti"));
// console.log(Array.from("Shruti")); // creates an array with all letters present in string

// console.log(Array.from({name:"Shruti"})); // returns empty array because u need
                                          //to define what u want to make array

let score1 = 100  
let score2 = 200                                          
let score3 = 300

console.log(Array.of(score1, score2, score3)); 