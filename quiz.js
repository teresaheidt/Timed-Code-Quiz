const startButton = document.getElementById("startBtn");
const questionScreen = document.getElementById("question-screen");
const startScreen = document.getElementById("start-screen");
const questionEl = document.getElementById("question");
const timerEl = document.getElementById("timer");
const answerButtonEl = document.getElementById("answer-button");

var currentQuestionIndex = 0;
var timer = 60;


startButton.addEventListener("click", startGame)

// Start the game
function startGame() {
    startScreen.setAttribute("class", "hide")
    questionScreen.classList.remove("hide")
    setNextQuestion()
}

// set timer
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
        
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
     }, 1000);
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
        choices: [ "A programming language that allows you to implement complex features on a web page", 
        "A film about coffee", 
        "A way to add colors and change fonts", 
        "High level goverment coding"],
        answer: "answer one"
            
    },
    {
        question: 'What Javascript1?',
        choices: [ "answer one", "answer 2", "answer 3", "answer 4"],
        answer: "answer one"
            
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
            
    }

]