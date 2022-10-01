var readLineSync = require('readline-sync');
var score = 0;
// user age above 25
var userReadAge = readLineSync.question("do you think im above 25  ?? ");

if (userReadAge === "yes") {
  console.log("u r correct")
  score += 1;
}
else {
  console.log("u r wrong")
  score -= 1;
}
console.log("ur score is " + score);


