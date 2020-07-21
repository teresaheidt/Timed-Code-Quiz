const startButton = document.getElementById("startBtn");
const questionScreen = document.getElementById("question-screen");
const startScreen = document.getElementById("start-screen");
const questionEl = document.getElementById("question");
const timerEl = document.getElementById("timer");
const answerButtonEl = document.getElementById("answer-button");

var  currentQuestionIndex = 0;
var timer = 60;


startButton.addEventListener("click", startGame)

function startGame() {
    startScreen.setAttribute("class", "hide")
    questionScreen.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
   var currentQuestion = questions[currentQuestionIndex];
   console.log(currentQuestion)
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

function clocktick() {
    setInterval(() => {
        
    }, interval);
}

function endQuiz() {
    console.log("show question here")
}

const questions = [
    {
        question: 'What Javascript?',
        choices: [ "answer one", "answer 2", "answer 3", "answer 4"],
        answer: "answer one"
            
    },
    {
        question: 'What Javascript1?',
        choices: [ "answer one", "answer 2", "answer 3", "answer 4"],
        answer: "answer one"
            
    },
    {
        question: 'What Javascript2?',
        choices: [ "answer one", "answer 2", "answer 3", "answer 4"],
        answer: "answer one"
            
    },
    {
        question: 'What Javascript3?',
        choices: [ "answer one", "answer 2", "answer 3", "answer 4"],
        answer: "answer one"
            
    }

]