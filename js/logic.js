
var startBtn = document.getElementById("start");
var timerEl = document.getElementById("time");
var timeLeft = 59;
var startScreen = document.getElementById("start-screen");
var questionBox = document.getElementById("question-box");
var choicesEl = document.getElementById('choices');

// Timer & Start
startBtn.addEventListener('click', countdown);
function countdown() {
    startScreen.style.display = "none"; //removes start screen
    questionBox.style.display = "block"; //shows questions
    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft + '';
        timeLeft--;

        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
    displayQuestion(); //i want to start quiz after the timer starts, right?
}

// Questions
var questionIndex = 0;
var questionTextEl = document.getElementById("question-title");
// console.log('i am the question Text El')
// console.dir(questionTextEl);
var choiceTextEl = document.getElementById("choices");
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 2
    },
];


function displayQuestion() {
    // get the current question from the questions array
    var currentQuestion = questions[questionIndex];
    // var h2 = document.createElement('h2');
    // h1.textContent = questions[0].title;
    // questionTextEl.appendChild(h2);
    // got into the question element and set the text to cur
    questionTextEl.textContent = currentQuestion.title;
    choiceTextEl.innerHTML = "";

    for (var i = 0; i < currentQuestion.choices.length; i++) {
        // create the choice button
        var choiceBtn = document.createElement("button");
        // set attribute
        choiceBtn.setAttribute("class", "btn");
        choiceBtn.textContent = currentQuestion.choices[i];
        // set value attribute // if it makes sense
        // do event listener stuff here
        // add an event listener 
        choiceTextEl.appendChild(choiceBtn);
    };
};

choicesEl.addEventListener('click', function choiceClick(e){
    if (!e.target.matches('button'))
        return;
    var userAnswer = e.target.textContent; //could not figure this out without help from tutor and ta's need 'e' before to have mouse event
    var question = questions[questionIndex];
    var correct = question.choices[question.answer];
    var resultEl = document.getElementById("final-score")

    if (userAnswer === correct) {
        timeLeft +=3;
        resultEl.style.display = "block";
        resultEl.textContent = "Correct";
    }
    else {
        timeLeft -=5;
        resultEl.style.display = "block";
        resultEl.textContent = "Wrong";
    }

})