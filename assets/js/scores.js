function saveHighscores() {

    var highscores = JSON.parse(localStorage.getItem("highscores"));
  
    for (var i = 0; i < highscores.length; i++) {
      // make a "scoreboard" to list highscores
      var scoreLi = document.createElement("li");
      scoreLi.textContent = highscores[i].initials + ": " + highscores[i].highscore;
      // show the score on the page
      document.getElementById("highscores").appendChild(scoreLi);
    }
  }
  
  //i dont want to keep these files...but this brings up error on console log because it's trying to read something that isn't there i think
  function clearHighscores() {
    localStorage.removeItem("highscores");
    location.reload();
  }
  
  var resetBtn = document.getElementById("reset");
  resetBtn.addEventListener("click", function () {
    clearHighscores();
  })
  saveHighscores();