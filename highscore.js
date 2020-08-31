const highScore = document.querySelector('highScore');
const userdata = JSON.parse(localStorage.getItem("userData")) || [];

highScore.innerHTML = highScore 
.map((userdata), => {
  return `<p class="styledText">${score.initial} - ${score.score}</p>`;

})

function resetScores() {
  window.localStorage.clear();
}

resetBtn.addEventListener("click", resetScores);



