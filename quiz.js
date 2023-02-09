var questions = [
  {
    question: "Who created JavaScript?",
    choices: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich", "Bill Gates"],
    answer: "Brendan Eich"
  },
  {
    question: "When was JavaScript created?",
    choices: ["1995", "1996", "1994", "none of the above"],
    answer: "1995"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    choices: ["Node.js", "TypeScript", "npm", "All of the above"],
    answer: "npm"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    choices: ["Angular", "jQuery", "RequireJS", "ESLint"],
    answer: "ESLint"
  },
  {
    question: "Which of the following is not a JavaScript framework?",
    choices: ["Angular", "React", "Vue", "jQuery"],
    answer: "jQuery"
  },
];

console.log("Hello World");

var startButton = document.querySelector("#start-button");
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById('question-section').style.display = 'block';
  nextQuestion();
  // var intervalId = setInterval(decrementTime, 1000);
  var intervalId = setInterval(function () {
    seconds--;
    document.getElementById("timer").innerHTML = seconds + " seconds remaining";
    if (seconds === 0) {
      clearInterval(intervalId);
      endGame();
      alert("Time's up! The quiz is over.");
    }
  }, 1000);
});

var index = 0;
var score = 0;

// Set the number of seconds for the timer
var seconds = 60;

// Display the starting time on the page
document.getElementById("timer").innerHTML = seconds + " seconds remaining";


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
  console.log("Game over!");
  var initials = window.prompt("Enter your initials to save your score.");
  window.alert(initials + "! Your score is " + score + " out of " + questions.length + ".");
  document.getElementById("previousScores").innerHTML = initials + " - " + score + " out of " + questions.length;
};

