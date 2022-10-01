var readLineSync = require('readline-sync');
var score = 0;
// user age above 25
var userQues1 = readLineSync.question("do you think im above 25  ?? ");
var userQues2 = readLineSync.question("where i am from  ?? ");
var userAns1 = "yes";
var userAns2 = "Telangana";

if (userQues1 === userAns1) {
  console.log("u r correct")
  score += 1;
}
else {
  console.log("u r wrong")
  score -= 1;
}
if (userQues2 === userAns2) {
  console.log("u r correct")
  score += 1;
}
else {
  console.log("u r wrong")
  score -= 1;
}

console.log("ur score is " + score);


