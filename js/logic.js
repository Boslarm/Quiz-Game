
var startBtn = document.getElementById("start");
var timerEl = document.getElementById("time");
var timeLeft = 59;
var startScreen = document.getElementById("start-screen");
var questionBox = document.getElementById("question-box");

// Timer & Start
startBtn.addEventListener('click', countdown); 
    function countdown() {    
        startScreen.style.display = "none"; //removes start screen
        questionBox.style.display = "block"; //shows questions
        var timeInterval = setInterval(function () {
          timerEl.textContent = timeLeft + '';
          timeLeft--;
      
          if(timeLeft === 0) {
            clearInterval(timeInterval);
          } 
        }, 1000);
        startQuiz(); //i want to start quiz after the timer starts, right?
    }


// Questions

var questionTextEl = document.getElementById("question-title");
var choiceTextEl = document.getElementById("choices");
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: "alerts",
    },
];


function startQuiz() {
    var currentQuestion = questions[questionIndex];
    questionTextEl.textContent = currentQuestion.text;
    choiceTextEl.innerHTML = "";
    
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choiceBtn = document.createElement("button");

        choiceBtn.setAttribute("class", "btn");
        choiceBtn.textContent = currentQuestion.choices[i];
        choiceTextEl.appendChild(choiceBtn);
    }; //why isnt this working?
};