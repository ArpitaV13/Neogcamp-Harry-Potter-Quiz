//Harry Quiz
 var readLineSync = require("readline-sync");
const chalk=require("chalk");



var score=0;

function welcome(){
  var name=readLineSync.question("What is your name ? ");
console.log(chalk.bold.blue("Welcome ")+chalk.bold.yellow(name)+" !"+"Let us see how well do you know " +chalk.underline.bold.red("Harry Potter")+" ?");

}







var questions=[
  {
    question:"Name Harry Potter's Parents. ",
    answer: "James and Lily Potter"
  },
  {
    question:"Name of Harry Potter's owl.",
    answer:"Hedwig"
  },
  {
    question:"Draco Malfoy's Dad. ",
    answer:"Lucius Malfoy"
  },
  {
    question:"Name of Lord Voldemort's loyal snake. ",
    answer:"Nagini"
  },
  {
    question:"Name the killing curse. ",
    answer:"Avada Kedavra"
  },
  {
    question:"Spell for disarming someone. ",
    answer:"Expelliarmus"
  },
  {
    question:"Harry Potter's godfather. ",
    answer:"Sirius Black"
  },
  {
    question:"Ron's pet name. ",
    answer:"Scabbers"
  },
  {
    question:"Name a muggle.",
    answer:"Hermione"
  },
  {
    question:"Harry Potter's eye colour.",
    answer:"Green"
  }
  
];



function play(question,answer){
  var userAnswer=readLineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Right"));
    score++;
  }
  else{
    console.log(chalk.red("Wrong"));
  }

  console.log("Current Score: ",score);
  console.log("-------------");
}


function game(){
  for(var i=0; i<questions.length;i++){
    var currentQuestion=questions[i];
    play(currentQuestion.question , currentQuestion.answer)
  }
}



function showScore(){
  console.log("Yay! You scored ",score);

}

welcome();
game();
showScore();

