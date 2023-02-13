var questions = [
  {
    question: "1. Who created JavaScript?",
    choices: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich", "Bill Gates"],
    answer: "Brendan Eich"
  },
  {
    question: "2. When was JavaScript created?",
    choices: ["1995", "1996", "1994", "none of the above"],
    answer: "1995"
  },
  {
    question: "3. Which one of these is a JavaScript package manager?",
    choices: ["Node.js", "TypeScript", "npm", "All of the above"],
    answer: "npm"
  },
  {
    question: "4. Which tool can you use to ensure code quality?",
    choices: ["Angular", "jQuery", "RequireJS", "ESLint"],
    answer: "ESLint"
  },
  {
    question: "5. Which of the following is not a JavaScript framework?",
    choices: ["Angular", "React", "Vue", "jQuery"],
    answer: "jQuery"
  },
];

var intervalId;
var index = 0;
var score = 0;
// Set the number of seconds for the timer
var seconds = 60;

// Display the starting time on the page
document.getElementById("timer").innerHTML = seconds + " seconds remaining";

var startButton = document.querySelector("#start-button");
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById('start-button').style.display = 'none';
  document.getElementById('scoreSection').style.display = '';  
  document.getElementById('question-section').style.display = 'block';
  nextQuestion();
  // var intervalId = setInterval(decrementTime, 1000);
    intervalId = setInterval(function () {
    seconds--;
    document.getElementById("timer").innerHTML = seconds + " seconds remaining";
    if (seconds === 0) {
      clearInterval(intervalId);
      endGame();
      alert("Time's up! The quiz is over.");
    }
  }, 1000);
});




function nextQuestion() {
  console.log(questions[index]);
  var question = questions[index];
  var choices = question.choices;
  var questionText = document.querySelector("#question");
  questionText.textContent = question.question;
  var choicesList = document.querySelector("#choices");
  choicesList.innerHTML = "";
  for (var i = 0; i < choices.length; i++) {
    var choice = choices[i];
    var choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choice);
    choiceButton.addEventListener("click", function (event) {
      var answer = event.target.value;
      if (answer === questions[index].answer) {
        score++;
        document.getElementById('playerScore').textContent = score;
      }
      index++;
      if (index === questions.length) {
        endGame();
      } else {
        nextQuestion();
      }
    });
    choicesList.appendChild(choiceButton);
  }
}


function endGame(event) {
  clearInterval(intervalId);
  console.log("Game over!");
  var initials = window.prompt("Enter your initials to save your score.");
  initials = initials.substring(0, 2);
  window.alert(initials + "! Your score is " + score + " out of " + questions.length + ".");
  var createElement = document.createElement("li");
  createElement.textContent = initials.toUpperCase() + " - " + score + " out of " + questions.length + " with " + seconds + " seconds remaining";
  document.getElementById("previousScoresHeader").style.display = '';
  document.getElementById("scoreSection").style.display = 'none';
  document.getElementById("previousScores").style.display = '';
  document.getElementById("previousScores").insertBefore(createElement, document.getElementById("previousScores").firstChild);
  document.getElementById('scoreSection').style.display = 'none';
  document.getElementById('restart-button').style.display = '';
  document.getElementById('question-section').style.display = 'none';
  var restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", function (event) {
  document.getElementById('restart-button').style.display = 'none';
  document.getElementById('start-button').style.display = '';
  event.preventDefault();
  score = 0;
  index = 0;
  seconds = 60;
  document.getElementById("timer").innerHTML = seconds + " seconds remaining";
});

};




