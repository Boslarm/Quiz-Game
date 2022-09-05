var timerEl = document.getElementById("time");
var startBtn = document.getElementById("start");



startBtn.addEventListener("click", countdown());

function countdown() {
    var timeLeft = 90;
  
    var timeInterval = setInterval(function () {
      timerEl.textContent = timeLeft + '';
      timeLeft--;
  
      if(timeLeft === 0) {
        clearInterval(timeInterval);
      } 
    }, 1000);
  }
  startBtn.addEventListener("click", countdown());