var readLineSync = require('readline-sync');

// read and enter username
var userName = readLineSync.question("hello ");
var welcomeMsg = "welcomee  " + userName;

console.log(welcomeMsg);
