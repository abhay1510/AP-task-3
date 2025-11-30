/* ------------------ IMAGE CAROUSEL ------------------ */
let images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;

function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("carouselImage").src = images[index];
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("carouselImage").src = images[index];
}

/* ------------------ QUIZ ------------------ */
const quizQuestions = [
    {
        question: "1. HTML stands for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "None"],
        answer: 0
    },
    {
        question: "2. CSS is used for?",
        options: ["Styling", "Database", "Networking"],
        answer: 0
    },
    {
        question: "3. JS stands for?",
        options: ["Java Software", "JavaScript", "Jumbo Script"],
        answer: 1
    }
];

let quizBox = document.getElementById("quizBox");

// Display questions
quizQuestions.forEach((q, i) => {
    let block = document.createElement("div");
    block.innerHTML = `
        <p>${q.question}</p>
        <label><input type='radio' name='q${i}' value='0'> ${q.options[0]}</label><br>
        <label><input type='radio' name='q${i}' value='1'> ${q.options[1]}</label><br>
        <label><input type='radio' name='q${i}' value='2'> ${q.options[2]}</label>
    `;
    quizBox.appendChild(block);
});

// Submit Quiz
document.getElementById("submitQuiz").onclick = function () {
    let score = 0;

    quizQuestions.forEach((q, i) => {
        let selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value == q.answer) {
            score++;
        }
    });

    document.getElementById("quizResult").innerText =
        `Your Score: ${score} / ${quizQuestions.length}`;
};

/* ------------------ API FETCH (JOKE) ------------------ */
function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(res => res.json())
        .then(data => {
            document.getElementById("jokeText").innerText =
                data.setup + " - " + data.punchline;
        })
        .catch(() => {
            document.getElementById("jokeText").innerText = "Error loading joke!";
        });
}
