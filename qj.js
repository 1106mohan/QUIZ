const questions = [
    {
        question: "1.Grand Central Terminal, Park Avenue, New York is the world's",
        answers: ["a.largest railway station", "b.Highest railway station", "c.Longest railway station", "d.NOB"],
        correct: 1
    },
    {
        question: "2.Entomology is the science that studies?",
        answers: ["a.Behavior of human beings", "b.The origin and history of technical and scientific terms", "c.Insects", "d.The formation of rocks"],
        correct: 3
    },
    {
        question: "3.Eritrea, which became the 182nd member of the UN in 1993, is in the continent of?",
        answers: ["a.Asia", "b.Africa", "c.Europe", "d.Auatralia"],
        correct: 2
    },
    {
        question: "4.What is the largest ocean on Earth?",
        answers: ["a.Atlantic Ocean", "b.Indian Ocean", "c.Arctic Ocean", "d.Pacific Ocean"],
        correct: 3
    },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => selectAnswer(index));
        answersElement.appendChild(button);
    });
}

function selectAnswer(index) {
    const currentQuestion = questions[currentQuestionIndex];
    if (index === currentQuestion.correct) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h1>Your Score: ${score} out of ${questions.length}</h1>`;
    
}
function showThanks()
{
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = '<h1> THANK YOU</H1>';
}

document.getElementById("next-button").addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
        
    }
});

// Load the first question
loadQuestion();

