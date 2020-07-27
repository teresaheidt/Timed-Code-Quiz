const finalScore = document.getElementById('finalscore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const resentBtn = document.querySelector('#resetBtn');

const storedInitials = () => (
    <div>
      <ul>{initials.map(initials => <li key={initials}> {initials} </li>)}</ul>
    </div>
  );
.join("");

function resetScores() {
    window.localStorage.clear();
}

