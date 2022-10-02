// final quiz
var readLineSync=require('readline-sync');
var userName=readLineSync.question("hello what is your name ?? ");
console.log("WELCOME  "+ userName);
var score=0;
function userinput(question, answer) {
  var userans=readLineSync.question(question);
  if(userans===answer){
    console.log("Right Answer");
    score+=1;
    
  }
  else{
      console.log("Wrong Answer");
    score-=1;
  }}

//array of objects 
  const quiz=[{
    question:"whta is my name ??",
    answer:"kushulu"
  },
             {
    question:"whta is my color ??",
    answer:"white"
  },
              {
    question:"whta is my weight ??",
    answer: "60"
  }
             ];
//traversing the array of objects
  for (let index = 0; index < quiz.length; index++) {
    var currques=quiz[index];
    userinput(currques.question,currques.answer);
  }
  console.log("your final score is "+ score);
