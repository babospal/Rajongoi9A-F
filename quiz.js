const questions = [
    {
        question: "Mi Magyarország fővárosa?",
        answers: ["Debrecen", "Szeged", "Budapest", "Pécs"],
        correct: 2
    },
    {
        question: "Melyik bolygó a Naprendszer legnagyobbja?",
        answers: ["Föld", "Mars", "Jupiter", "Vénusz"],
        correct: 2
    }
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    questionElement.textContent = q.question;
    answersElement.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.classList.add("btn", "btn-outline-primary");
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        answersElement.appendChild(button);
    });

    nextButton.style.display = "none";
}

function checkAnswer(index) {
    const isCorrect = index === questions[currentQuestionIndex].correct;
    document.querySelectorAll("#answers button")[index].classList.add(isCorrect ? "btn-success" : "btn-danger");

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionElement.textContent = "Gratulálok! Végigjátszottad a kvízt.";
        answersElement.innerHTML = "";
        nextButton.style.display = "none";
    }
});

loadQuestion();