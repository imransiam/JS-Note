const accountId = 1234;
let accountEmail = "imransiam@gmail.com";
var accountPassword = "793793"
accountCity = "Dhaka";
let accountState;// / This valueless variable will be undefined initially 

// accountId = 1235; // This will throw an error because accountId is a constant
accountEmail = "fjdf@yahoo.com";
accountPassword = "newpassword123";
accountCity = "Chittagong";

console.table([accountCity, accountEmail, accountPassword,accountState]);

/*
Prefer not to use var because it has function scope and can lead to unexpected behavior.
Use let for variables that will change and const for constants that should not change.


*/
