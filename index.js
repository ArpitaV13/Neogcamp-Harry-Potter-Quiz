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
     options:["James and Lily Potter","Tom and Annie Potter","Ben and James Potter","Brad and Ceasie Potter"],
    answer:0
  },
  {
    question:"Name of Harry Potter's owl.",
    options:["Hedwig","Rabby","Lucy","Jacky"],
    answer:0
  },
  {
    question:"Draco Malfoy's Dad. ",
    options:["Hagrid","Lucius Malfoy","Ron","Dumbledore"],
    answer:1
  },
  {
    question:"Name of Lord Voldemort's loyal snake. ",
    options:["Lizzy","Hissy","Tommy","Nagini"],
    answer:3
  },
  {
    question:"Name the killing curse. ",
    options:["Expelliarmus","Avada Kedavra","Abra-ca-dabra","Expecto Patronum"],
    answer:1
  },
  {
    question:"Spell for disarming someone. ",
    options:["Avicii","Expecto Patronum","Abra-ca-Dabra","Expelliarmus"],
    answer:3
  },
  {
    question:"Harry Potter's godfather. ",
    options:["Draco Malfoy","Hagrid","Sirius Black","Snape"],
    answer:2
  },
  {
    question:"Ron's pet name. ",
    options:["Scabbers","Johny","Tom","Jerry"],
    answer:0
  },
  {
    question:"Name a muggle.",
    options:["Draco","Hermione"],
    answer:1
  },
  {
    question:"Harry Potter's eye colour.",
    options:["Brown","Pink","Blue","Green"],
    answer:3
  }
  
];



function play(question,options,answer){
  var optionString=""
  options.forEach((option,index)=>{
    optionString+=`\n${index}. ${option}`
  })
  var userAnswer=readLineSync.question(`${question}${optionString}\nEnter the option number: `)
  if(userAnswer=== answer.toString() ){
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
  

    play(currentQuestion.question ,currentQuestion.options,currentQuestion.answer)
  }
}



function showScore(){
  if(score>=8){
  console.log("Yay! You know Harry Potter well. Your score is ",score);
  }
  else if(score>=5 && score<8){
    console.log("You may need to watch the episodes again!. Your score is ",score);
  }
  else{
    console.log("You don't know Harry Potter! Your score is ",score);
  }

}

welcome();
game();
showScore();

