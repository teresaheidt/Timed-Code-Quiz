const initials = document.getElementById('initials');
const username = document.getElementById('userName');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalscore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(highScores);

topFive.innerHTML = mostRecentScore;

localStorage.setItem("initials", JSON.stringify([]));

const unsername = ['th', 'bg', 'th', ];
for (let i = 0; i < username.length; i++) {
    console.log(username);
}

initials.addEventListener('click', () => {
});

saveHighScores = e => {
    console.log("clicked the save button!");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: initials.value
    };
    console.log(initials);
    finalScore.push(score);
  
}



