const accountId = 144553;
let accountEmail = "mudit@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"  // Not a recommended way to make a variable

let accountState

// accountId =3  not allowed

accountEmail = "h@hmai"

accountPassword = "7890"

accountCity = "Delhi"

console.log(accountId);

/*
 Prefer not to user var 
 because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword, accountCity,accountState])


