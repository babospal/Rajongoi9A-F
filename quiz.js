const questions = [
    {
        question: "Melyik évben jelent meg először a Terraria?",
        answers: ["2010", "2011", "2012", "2013"],
        correct: 1
    },
    {
        question: "Ki a Terraria megalkotója?",
        answers: ["Markus Persson", "Toby Fox", "Andrew Spinks", "Eric Barone"],
        correct: 2
    },
    {
        question: "Melyik korábbi rajongói játék fejlesztésében vett részt a Terraria alkotója?",
        answers: ["Super Mario Bros. X", "Hollow Knight", "Stardew Valley", "Cuphead"],
        correct: 0
    },
    {
        question: "Melyik platformon jelent meg először a Terraria?",
        answers: ["PC (Steam)", "Xbox 360", "PlayStation 3", "Android"],
        correct: 0
    },
    {
        question: "Melyik új főellenséget vezették be a Terraria 1.3-as frissítésében?",
        answers: ["Skeletron Prime", "Moon Lord", "The Twins", "Duke Fishron"],
        correct: 1
    },
    {
        question: "Melyik frissítés zárta le a Terraria hivatalos fejlesztését?",
        answers: ["1.2", "1.3", "1.4", "2.0"],
        correct: 2
    },
    {
        question: "Hány példányban kelt el világszerte a Terraria?",
        answers: ["8 millió", "26 millió", "44 millió", "87 millió"],
        correct: 2
    },
    {
        question: "Melyik új játékmódot vezették be a \"Journey's End\" frissítésben?",
        answers: ["Classic Mode", "Master Mode", "Hard Mode", "Expert+ Mode"],
        correct: 1
    },
];

let currentQuestionIndex = 0;
let score = 0;

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
    const buttons = document.querySelectorAll("#answers button");

    if (isCorrect) {
        score++;
    }

    buttons[index].classList.add(isCorrect ? "btn-success" : "btn-danger");

    buttons.forEach(button => {
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        questionElement.textContent = `Gratulálok! ${score} / ${questions.length} helyes választ adtál.`;
        answersElement.innerHTML = "";
        nextButton.style.display = "none";
    }
});

loadQuestion();