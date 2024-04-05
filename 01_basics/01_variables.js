const accountId = 144553
let accountEmail = "shruti@google.com"
var accountPassword = "12345"
accountCity = "Bilaspur"
let accountState

// accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword = "121212112"
accountCity = "Vizag"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])