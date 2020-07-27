const finalScore = document.getElementById('finalscore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const resentBtn = document.querySelector("#resentBtn");

highScoreList.innerHTML = highScores;
,Map((initials) => {
    return `<p class=">${score.name} - ${score.score}</p>`;
})
.join("");

function resetScores() {
    window.localStorage.clear();
}

resentBtn.addEventListener('click', resetScores);