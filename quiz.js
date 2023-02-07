var quizQuestions = ["Who created Javascript?", "What is first browser that supported Javascript?", "What does console logging the window do?", "What is the correct syntax for a function?", "What year was Javascript created?"];
var quizAnswers = ["Brendan Eich", "Netscape", "Opens the console", "function myFunction()", "1995"];


var playerScore = 0;

var submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener('click', function() {
    event.preventDefault();
    awardPoints();
  });

  const radioButtons = document.querySelectorAll('input[name="answer"]');

  // Create a variable to store the player's selected answer
  let selectedAnswer;
  
  // Loop over the radio buttons and add a change event listener to each one
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('change', function() {
      selectedAnswer = this.value;
    });
  }
  
  // Function to award the player 10 points for the correct answer
  function awardPoints() {

    var tooltip = document.querySelector("#tooltip");
    var scoreDisplay = document.querySelector("#scoreDisplay");

    if (quizAnswers.includes(selectedAnswer)) {
      tooltip.innerHTML = "Correct!";
        playerScore += 10;
        scoreDisplay.innerHTML = playerScore;
    } else {
      tooltip.innerHTML = "Incorrect!";
        playerScore -= 5;
        scoreDisplay.innerHTML = playerScore;
    }
  }

  var submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener('click', function() {
    event.preventDefault();
    nextQuestion();
  });

    // Function to move to the next question

    function nextQuestion() {
        var labels = document.querySelectorAll('label');

        labels[0].innerHTML = 'Netscape';
        labels[1].innerHTML = 'Internet Explorer';
        labels[2].innerHTML = 'Mosaic';
        labels[3].innerHTML = 'Firefox';

        var tooltip = document.querySelector("#tooltip");
        var scoreDisplay = document.querySelector("#scoreDisplay");
    
        if (quizAnswers.includes(selectedAnswer)) {
          tooltip.innerHTML = "Correct!";
            playerScore += 10;
            scoreDisplay.innerHTML = playerScore;
        } else {
          tooltip.innerHTML = "Incorrect!";
            playerScore -= 5;
            scoreDisplay.innerHTML = playerScore;
        }
    }

    var submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener('click', function() {
    event.preventDefault();
    nextQuestion2();
  });

    // Function to move to the next question

    function nextQuestion2() {
        var labels = document.querySelectorAll('label');

        labels[0].innerHTML = 'Opens the console';
        labels[1].innerHTML = 'Opens the window';
        labels[2].innerHTML = 'Opens the browser';
        labels[3].innerHTML = 'Opens the document';

        var tooltip = document.querySelector("#tooltip");
        var scoreDisplay = document.querySelector("#scoreDisplay");
    
        if (quizAnswers.includes(selectedAnswer)) {
          tooltip.innerHTML = "Correct!";
            playerScore += 10;
            scoreDisplay.innerHTML = playerScore;
        } else {
          tooltip.innerHTML = "Incorrect!";
            playerScore -= 5;
            scoreDisplay.innerHTML = playerScore;
        }
    }

    var submitBtn = document.querySelector("#submit");
  submitBtn.addEventListener('click', function() {
    event.preventDefault();
    nextQuestion3();
  });

    // Function to move to the next question

    function nextQuestion3() {
        var labels = document.querySelectorAll('label');

        labels[0].innerHTML = 'function myFunction()';
        labels[1].innerHTML = 'function myFunction';
        labels[2].innerHTML = 'myFunction()';
        labels[3].innerHTML = 'myFunction';

        var tooltip = document.querySelector("#tooltip");
        var scoreDisplay = document.querySelector("#scoreDisplay");
    
        if (quizAnswers.includes(selectedAnswer)) {
          tooltip.innerHTML = "Correct!";
            playerScore += 10;
            scoreDisplay.innerHTML = playerScore;
        } else {
          tooltip.innerHTML = "Incorrect!";
            playerScore -= 5;
            scoreDisplay.innerHTML = playerScore;
        }
    }

    var submitBtn = document.querySelector("#submit");
    submitBtn.addEventListener('click', function() {
      event.preventDefault();
      nextQuestion4();
    });

    // Function to move to the next question

    function nextQuestion4() {

        var labels = document.querySelectorAll('label');

        labels[0].innerHTML = '1995';
        labels[1].innerHTML = '1996';
        labels[2].innerHTML = '1997';
        labels[3].innerHTML = '1998';

        var tooltip = document.querySelector("#tooltip");
        var scoreDisplay = document.querySelector("#scoreDisplay");
    
        if (quizAnswers.includes(selectedAnswer)) {
          tooltip.innerHTML = "Correct!";
            playerScore += 10;
            scoreDisplay.innerHTML = playerScore;
        } else {
          tooltip.innerHTML = "Incorrect!";
            playerScore -= 5;
            scoreDisplay.innerHTML = playerScore;
        }
    }

