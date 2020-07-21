const startButton = document.getElementById("startBtn")
const questionContainerElement = document.getElementById("question-container")

const shuffleQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("started")
    startButton.classList.add("hide")
    shuffleQuestions = question.sort(() => Math.random( - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffleQuestions[currentQuestionIndex])

}

function showQuestion() {
    
}

function selectAnswer() {

}

const questions = [
    {
        question: 'What Javascript?'
        answers:[
            { text: "is programming language that allows you to implement complex features on webpages.", correct: true },
            { text: " is a styling prgramme to change colors.", correct: false}
        ]
    }
]