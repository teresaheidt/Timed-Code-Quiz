const startButton = document.getElementById("startBtn");
const scoreButton = document.getElementById("scoreBtn")
const questionScreen = document.getElementById("question-screen");
const startScreen = document.getElementById("start-screen");
const highScorePage = document.getElementById("highScore-page")
const questionEl = document.getElementById("question");
const timerEl = document.getElementById("timer");
const answerButtonEl = document.getElementById("answer-button");

// variables
var timerInterval;
// set time we are counting down to
var secondsLeft = 0;
var currentQuestionIndex = 0;
// Update the count down every second
var timeKeeper = setInterval(setTime, 0);
var timer = 60

// button to begin the game
startButton.addEventListener("click", startGame)

// button to see the high score
scoreButton.addEventListener("click", highScores)

// Start game function
function startGame() {
    startScreen.setAttribute("class", "hide")
    questionScreen.classList.remove("hide")
    setTime()
    setNextQuestion()
}

// see high score
function highScores() {
    highScorePage.setAttribute("class", "hide")
    scoreButton.classList.remove("hide")
}

// set timer
function setTime() {
    timerInterval = setInterval(function() {
        secondsLeft;
        console.log(secondsLeft);
        if(secondsLeft < 0) {
        clearInterval(timerInterval);
        }
    }, 1000)
} 

function setNextQuestion() {
   var currentQuestion = questions[currentQuestionIndex];
   questionEl.textContent = currentQuestion.question;
   timerEl.textContent = timer;

   answerButtonEl.innerHTML = "";

   currentQuestion.choices.forEach(function(choice) {
       var answerButton = document.createElement("button");
       answerButton.setAttribute("class", "choice");
       answerButton.setAttribute("value", choice);

       answerButton.onclick = questionClick;

       answerButton.textContent = choice;
       answerButtonEl.appendChild(answerButton);
   })
}

function questionClick() {
    console.log(this.value)
  
    if(this.value !== questions[currentQuestionIndex].answer) {
        console.log("wrong")
    } else {
        console.log("right")
    }
    currentQuestionIndex++;
    if(currentQuestionIndex === questions.length) {
        // endQuiz()
    } else {
    setNextQuestion();
    }
}

function endQuiz() {
    console.log("show question here")
}

const questions = [
    {
        question: 'What Javascript?',
        choices: [ "A programming language that allows you to implement complex features on a web page", 
        "A film about coffee", 
        "A way to add colors and change fonts", 
        "High level goverment coding"],
        answer: "answer one"
            
    },
    {
        question: 'What does Full Stack refer to?',
        choices: [ "A big stack of pancakes", 
        "The first stack of HTML programming", 
        "Working with both front and backend of the website", 
        "The back end of the website"],
        answer: "answer three"
            
    },
    {
        question: 'What does ParseInt do?',
        choices: [ "It changes the weather", 
        "Integrates all variables", 
        "Parses an object", 
        "Parses a string and returns an integar"],
        answer: "answer four"
            
    },
    {
        question: 'An "alt" atribute is an example of which of the following?',
        choices: [ "Alternative coding language", 
        "When an img cannot be displayed an alternate text message appears", 
        "basic javascript", 
        "A string"],
        answer: "answer two"
            
    },
]