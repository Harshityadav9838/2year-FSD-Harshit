var questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Markup Language",
            "Home Text Markup Language"
        ],
        answer: 0
    },

    {
        question: "Which language is used to style a webpage?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        answer: 1
    },

    {
        question: "Which language is used to add functionality to a webpage?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 2
    }
];


var currentQuestion = 0;
var timeLeft = 60;
var timer;


// Show question
function showQuestion() {

    var question = questions[currentQuestion];

    var html = "";

    html += "<h2>Question " + (currentQuestion + 1) + "</h2>";

    html += "<h3>" + question.question + "</h3>";

    for (var i = 0; i < question.options.length; i++) {

        html += `
            <input type="radio" name="answer" value="${i}">
            ${question.options[i]}
            <br><br>
        `;
    }

    document.getElementById("quiz-container").innerHTML = html;

    // Start fresh timer for this question
    startTimer();
}


// Timer
function startTimer() {

    // Stop previous timer
    clearInterval(timer);

    // Reset to 60 seconds
    timeLeft = 60;

    updateTimer();

    timer = setInterval(function () {

        timeLeft--;

        updateTimer();

        if (timeLeft <= 0) {

            clearInterval(timer);

            alert("Time's up!");

            // Automatically go to next question
            nextQuestion(true);
        }

    }, 1000);
}


// Display timer
function updateTimer() {

    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;

    document.getElementById("timer").innerText =
        "Time Left: " +
        minutes + ":" +
        (seconds < 10 ? "0" : "") +
        seconds;
}


// Next question
function nextQuestion(timeUp = false) {

    // If time is not up, check answer
    if (!timeUp) {

        var selected = document.querySelector(
            'input[name="answer"]:checked'
        );

        if (!selected) {
            alert("Please select an answer");
            return;
        }
    }

    // Stop current timer
    clearInterval(timer);

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        document.getElementById("quiz-container").innerHTML =
            "<h2>Quiz Completed!</h2>";

        document.getElementById("nextBtn").style.display = "none";

        document.getElementById("timer").style.display = "none";
    }
}


// Start first question
showQuestion();