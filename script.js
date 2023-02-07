var quizQuestions = ["Who created Javascript?", "What is first browser that supported Javascript?", "What does console logging the window do?", "What is the correct syntax for a function?", "What year was Javascript created?"];
var quizAnswers = ["Brendan Eich", "Netscape", "Opens the console", "function myFunction()", "1995"];

var startBtn = document.querySelector("#start");
  startBtn.addEventListener('click', function() {
    quiz();
  });

var quiz = function() {
    window.location.href = "quiz.html";
}
