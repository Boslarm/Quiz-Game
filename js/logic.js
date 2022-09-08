
var startBtn = document.getElementById("start");
var timerEl = document.getElementById("time");
var timeLeft = 59;
var startScreen = document.getElementById("start-screen");
var questionBox = document.getElementById("question-box");
var endScreen = document.getElementById("end-screen");
  var resultEl = document.getElementById("final-score")

hideEndScreen();

// Timer & Start
startBtn.addEventListener("click", countdown);
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

    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ['<script>', '<scripting>', '<js>', '<javascript>'],
        answer: 0
    },
    {
        title: "Where is the correct place to insert a JavaScript?",
        choices: ['<body>', '<head>', 'both <body> and <head>'],
        answer: 1
    },
    {
        title: "How can you add a comment in a JavaScript?",
        choices: ["<!-- -->", "//", "'"],
        answer: 1
    },
    {
        title: "Which event occurs when the user clicks on an HTML element?",
        choices: ["onmouseover", "onchange", "onmouseclick", "onclick"],
        answer: 3
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

var choicesEl = document.getElementById('choices');

choicesEl.addEventListener("click", function choiceClick(e){
    e.preventDefault();
    if (!e.target.matches("button"))
        return;
    var userAnswer = e.target.textContent; //could not figure this out without help from tutor and ta's need 'e' before to have mouse event
    var question = questions[questionIndex];
    var correct = question.choices[question.answer];
  
    //show the user that they are right and give time up to 60
    if (userAnswer === correct) {
        timeLeft +=3;
        resultEl.style.display = "block";
        resultEl.textContent = "Correct";
    }
    // show the user they are wrong and subtract time
    else {
        timeLeft -=5;
        resultEl.style.display = "block";
        resultEl.textContent = "Wrong";
    }
//go to next question (should this be within loop?)
    questionIndex++

    var timerId;
    if (questionIndex === questions.length) {
        clearTimeout(timerId);
        return showScore();
    }
    setTimeout(displayQuestion, 500); // i dont want to add a listener to this so I want to just automatically go to next question
});
//I need to clear the question to make way for the next input
function clearResult(){
    resultEl.style.display = "none";
};

//When quiz is over I want to show the user score
    //game is over when there are no more questions OR no time remaining

    //i'll make score the time remaining (this should be eaiser than adding value to correct)


function showScore(){
    questionBox.style.display = "none";
    console.log(questionBox.style.display = "none")
    endScreen.style.display = "block"; //does this also needs to be at the begining in displayQuestion
    resultEl.style.display = "block";

    if (timeLeft < 0) {
        resultEl.textContent = "0"
    }
    else {
        resultEl.textContent = timeLeft
    }
};
function hideEndScreen(){ //but not score! (how do i show an element that is hidden within parent)
    endScreen.style.display = "none";
    
};


var submitBtn = document.getElementById("submit");
var inputEl = document.getElementById("initials");

submitBtn.addEventListener("click", function saveHighscore(e) {
    e.preventDefault();
    // get value of input box
    var initials = inputEl.value.trim();
    if (initials === "") {
        alert("You must enter something :)")
        return "";
    }
    else if (initials.length > 3) {
        alert("No more than 3 letters")
        return "";
    }
    // get saved scores from localstorage
    var highscores;
    if (JSON.parse(localStorage.getItem("highscores")) != null)
        highscores = JSON.parse(window.localStorage.getItem("highscores"));
    else
        highscores = [];

    // turn score into object/array for new user
    var score = {
        initials: initials,
        highscore: timeLeft
    };
    highscores.push(score);
    // save to localstorage
    localStorage.setItem("highscores", JSON.stringify(highscores));
    // forward to highscore page
    location.href= "highscores.html";

    saveHighscore();
});