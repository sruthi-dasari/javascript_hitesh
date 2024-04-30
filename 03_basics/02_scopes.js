// global scope
var c = 300

// block scope
if(true){
    let a = 10
    const b = 20
    var c = 30
} // whatever we declare in block scope, these should not come out of it

// a nd b will not print, since value doesnt exist out of scope
// console.log(a); 
// console.log(b);
// c value gets printed
console.log(c); // 30 is getting printed instead of 300, therefore var is not used much.
                //  It becomes hectic to solve errors when lot of developers are working with code.