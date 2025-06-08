const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "123564" 
accountCity = "Jaipur"
let accountState;
// accountId = 2 //not allowed

accountEmail = "hc@jbdj.com"
accountPassword = "2132121"
accountCity = "Bengluru"

/*
prefer not to use var
because of issue in block scope and functional scope
*/


console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
