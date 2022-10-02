// functions with userinput
var readLineSync=require('readline-sync');
var score=0;
function userinput(question,answer){
  var useranswer=readLineSync.question(question);
  if(answer===useranswer){
    console.log("your answer is correct")
    score+=1;
  }
  else{
     console.log("your answer is wrong")
    score-=1;
  }
}
var questionone="what is my name?? ";
var answerone="kushulu";
var questiontwo="what is my favourite dish?? ";
var answertwo="biryani";
userinput(questionone,answerone);
userinput(questiontwo,answertwo);

if(score>0){
  console.log("your score is " + score);
  console.log("keep scoring high ");
}
else{
  console.log("your score is " + score);
  console.log("better luck next time ");
}