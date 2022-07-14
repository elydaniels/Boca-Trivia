const questions = {
    "questions": [
        {
            "question": "The capital of Australia is Sydney.",
            "answer": false
        },
        {
            "question": "Venezuela is home to the world’s highest waterfall.",
            "answer": true
        },
        {
            "question": "Is Mount Kilimanjaro the world’s tallest peak?",
            "answer": false
        },
        {
            "question": "Sharks are mammals.",
            "answer": false
        },
        {
            "question": "The hummingbird egg is the world's smallest bird egg.",
            "answer": true
        },
        {
            "question": "Bats are blind.",
            "answer": false
        },
        {
            "question": "Vitamin C is also known by the chemical name of Ascorbic Acid",
            "answer": true
        },
        {
            "question": "Transylvania is a historical region located in central Romania",
            "answer": true
        },

    ]
}

const question = document.getElementById('question')

let playerScore = (1*100)/8
let questionIndex = 0
let didReachLastQuestion = false


question.innerText = questions.questions[questionIndex].question

function handleTrue() {
    const currentQuestionObject = questions.questions[questionIndex]
    if (currentQuestionObject && currentQuestionObject.answer == true && didReachLastQuestion == false) {
        playerScore += 1
    }

    nextQuestion()
}

function handleFalse() {
    const currentQuestionObject = questions.questions[questionIndex]
    if (currentQuestionObject && currentQuestionObject.answer == false && didReachLastQuestion == false) {
        playerScore += 1
    }

    nextQuestion()
}

function nextQuestion() {
    questionIndex += 1
    if (questionIndex >= questions.questions.length) {
        didReachLastQuestion = true
        const yourFinalScore = `Your score is ${playerScore}%`
        question.innerText = yourFinalScore
        shouldHideAnswerButtons(true)
    } 
    else {
        question.innerText = questions.questions[questionIndex].question
    }
}

function replay() {
    shouldHideAnswerButtons (false)
    playerScore = 0
    questionIndex = 0
    didReachLastQuestion = false
    question.innerText = questions.questions[questionIndex].question
}

function shouldHideAnswerButtons(flag) {
    const trueButton = document.getElementById('true-button')
    const falseButton = document.getElementById('false-button')
    const replayButton = document.getElementById('replay-button')

    if (flag == true) {
        replayButton.style.opacity = 1
        trueButton.style.opacity = 0
        falseButton.style.opacity = 0
    } else {
        replayButton.style.opacity = 0
        trueButton.style.opacity = 1
        falseButton.style.opacity = 1
    }
}

 function replay(){
    location.reload()
}

