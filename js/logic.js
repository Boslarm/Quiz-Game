// Timer
var startBtn = document.getElementById("start");
var timerEl = document.getElementById("time");
var timeLeft = 60;

startBtn.addEventListener('click', countdown); 
    function countdown() {    
        startScreen.style.display = "none"; //removes start screen
        var timeInterval = setInterval(function () {
          timerEl.textContent = timeLeft + '';
          timeLeft--;
      
          if(timeLeft === 0) {
            clearInterval(timeInterval);
          } 
        }, 1000);
    }


// Questions
var questionBox = document.getElementById("question-box");
var questionTextEl = document.getElementById("question-title");
var choices = document.getElementById("choices");

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: "alerts",
    },
];

// Start
var startBtn = document.getElementById("start");
var startScreen = document.getElementById("start-screen");

questionsBox.stlye.display = "block";

