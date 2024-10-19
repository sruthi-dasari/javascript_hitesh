// for in loop (used for objects)

// const myObject = {
//     js: "javascript",
//     cpp: "c++",
//     rb: "ruby",
//     swift: "swift by apple",
// }

// for (const key in myObject) {
//    console.log(`${key} is the shortcut of ${myObject[key]}`);
// }

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key); // nothing gets printed since map is not iterable with "for in loop"
}
