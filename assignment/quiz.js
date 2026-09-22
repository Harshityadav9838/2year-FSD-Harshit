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
}


function nextQuestion() {

    var selected = document.querySelector(
        'input[name="answer"]:checked'
    );

    if (!selected) {
        alert("Please select an answer");
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        document.getElementById("quiz-container").innerHTML =
            "<h2>Quiz Completed!</h2>";

        document.getElementById("nextBtn").style.display = "none";
    }
}


showQuestion();