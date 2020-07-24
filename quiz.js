const startButton = document.getElementById("startBtn");
const scoreButton = document.getElementById("scoreBtn");
const questionScreen = document.getElementById("question-screen");
const startScreen = document.getElementById("start-screen");
const questionEl = document.getElementById("question");
const timerEl = document.getElementById("timer");
const answerButtonEl = document.getElementById("answer-button");
const saveInitals = document.getElementById("saveInitials");

// variables
var timerInterval;
// set time we are counting down to
var secondsLeft = 60;
var currentQuestionIndex = 0;
var timer = 60

// button to begin the game
startButton.addEventListener("click", startGame)

// Start game function
function startGame() {
    startScreen.setAttribute("class", "hide")
    questionScreen.classList.remove("hide")
    setTime()
    setNextQuestion()
}

// set timer
function setTime() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        console.log(secondsLeft);
        timerEl.innerText = secondsLeft;
        if(secondsLeft === 0) {
        clearInterval(timerInterval);
        }
    }, 1000)
}

// set the questions to be answered one after the other
function setNextQuestion() {
   var currentQuestion = questions[currentQuestionIndex];
   questionEl.textContent = currentQuestion.question;
   timerEl.textContent = secondsLeft;

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

// if the user doesn't get the question right then -15 is taken from the timer
function questionClick() {
    if(this.value !== questions[currentQuestionIndex].answer) {
        secondsLeft = secondsLeft - 15
        console.log("wrong");
    } 
    else {
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        endQuiz()
    } else {
    setNextQuestion();
    }
}

// the quiz ends when the questions have been completed
function endQuiz () {
    clearInterval(timerInterval)
    questionEl.textContent = ""
    answerButtonEl.textContent = ""
    timerEl.innerText = secondsLeft;
    console.log("Well done!")
    document.getElementById("end-screen").style.display="block"

// see highscore
function highScores() {
    highScorePage.setAttribute("class", "hide")
    scoreButton.classList.remove("hide")
    var highScore = document.getElementById=("saveInitials")
    console.log("highScores")

// get the localstorage 
    
    localStorage.setItem('initials', JSON.stringify(time));
    console.log("initials");
}
}

// the list of questions the user must complete
const questions = [
    {
        question: 'What Javascript?',
        choices: [ "A programming language that allows you to implement complex features on a web page", 
        "A film about coffee", 
        "A way to add colors and change fonts", 
        "High level goverment coding"],
        answer: "A programming language that allows you to implement complex features on a web page",
            
    },
    {
        question: 'What does Full Stack refer to?',
        choices: [ "A big stack of pancakes", 
        "The first stack of HTML programming", 
        "Working with both front and backend of the website", 
        "The back end of the website"],
        answer: "Working with both front and backend of the website"
            
    },
    {
        question: 'What does ParseInt do?',
        choices: [ "It changes the weather", 
        "Integrates all variables", 
        "Parses an object", 
        "Parses a string and returns an integar"],
        answer: "Parses a string and returns an integar"
            
    },
    {
        question: 'What is the function of a <ul> tag?',
        choices: [ "Defines an unordered list", 
        "Defines an ordered list", 
        "Is the beginning of a URL", 
        "An underline element"],
        answer: "Defines an unordered list"
            
    },
    {
        question: 'A CSS float property is a...?',
        choices: [ "Primitive form of Javascript and will be extinct very soon", 
        "Function that deploys multipple lines of code", 
        "Proprty that can float to the bottom of the page", 
        "Propery that determines how far left or how far right and element should float within its parent element"],
        answer: "Propery that determines how far left or how far right and element should float within its parent element"
            
    },
    {
        question: 'How many selectors are used in CSS?',
        choices: [ "Ten", 
        "Two", 
        "Twenty", 
        "Too many to count"],
        answer: "Two"
    },
    {
        question: 'What is "getElementById"?',
        choices: [ "It is the method to add a class element to a string", 
        "It is a method to find an html element (with an id) and change its content", 
        "It is a way to look up your coding credentials", 
        "It is a way to locate the id in css"],
        answer: "It is a method to find an html element (with an id) and change its content"
    },
    { 
        question: 'What is a "String"?',
        choices: [ "A ball of yarn", 
        "A number element that can only be used for mathmatical purposes", 
        "A grouping of characters (letter, spaces, numbers, or symbols), surrounded by single or double quotes", 
        "A form used in html to create multiple lines of code"],
        answer: "A grouping of characters (letter, spaces, numbers, or symbols), surrounded by single or double quotes",
            
    },
]


