var readline = require('readline-sync');
var score = 0;
var highscore;

var highScoreBreakersList = [{name : "Mayur", score : 10,}, {name : "Meenaxi Chawla", score : 9,}]
var username = readline.question("Please Enter Your Name : ");
console.log("\nWelcome to Quiz " + username + "..!");
console.log("Lets See.. how much do u know Mayur Chawla");
console.log("-----------------------------------------------------");
function PlayGame(index,questions,answers)
{
  var useranswer = readline.question("Q." + index + ") " + questions + "\n" + "Answer : ");
  if(useranswer.toUpperCase() == answers.toUpperCase())
  {
    score++;
    console.log("Correct..");
  }
  else
  {
    score--;
    console.log("InCorrect..!")
  }
}

var question1 = {
  questionn : "Date of Birth?(DD-MM-YYYY)",
  answerr : "12-06-1997",
}

var question2 = {
  questionn : "Where does he Lives?",
  answerr : "Ahmedabad",
}
var question3 = {
  questionn : "Mayur Chawla's Graduation in?",
  answerr : "Computer Engineering",
}
var question4 = {
  questionn : "Mayur Chawla is a Vegetarian.(Yes/No)?",
  answerr : "Yes",
}
var question5 = {
  questionn : "Favourite Colour?",
  answerr : "Orange",
}
var question6 = {
  questionn : "He knows Java(true/false)?",
  answerr : "true",
}
var question7 = {
  questionn : "Mayur is Good with Computers(yes/no)?",
  answerr : "yes",
}
var question8 = {
  questionn : "Mayur's Favourite Movie?",
  answerr : "Avatar",
}
var question9 = {
  questionn : "Mayur's Favourite Web Series?",
  answerr : "the big bang theory",
}
var question10 = {
  questionn : "How many languges does Mayur know(eg-ans 09)?",
  answerr : "04",
}
var question11 = {
  questionn : "Mayur's Favourite Place?",
  answerr : "Home",
}
var question12 = {
  questionn : "Mayur's Favourite Book?",
  answerr : "I am Krishna",
}
var question13 = {
  questionn : "Is Mayur Hardworking(yes/no)?",
  answerr : "yes",
}
var questionsss = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13];
for(var i=0;i<questionsss.length;i++)
{
  PlayGame((i+1),questionsss[i].questionn, questionsss[i].answerr);
}
console.log("Your Score is : " + score);
highscore = highScoreBreakersList[0].score;
if(score>=highscore)
{
  highscore = score;
  console.log("You have broken the Highscore..")
  highScoreBreakersList.add(username);
}
console.log("-------------------------------------------------------------");
console.log("-----------------Highscore Breakers--------------------------");
console.log("-------------------------------------------------------------");
for(var i=0;i<highScoreBreakersList.length;i++)
{
  console.log(highScoreBreakersList[i]);
}