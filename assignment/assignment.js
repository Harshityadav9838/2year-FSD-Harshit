
function validateForm() {
    var name = document.forms["quizForm"]["name"].value;
    var roll = document.forms["quizForm"]["roll"].value;
    var section = document.forms["quizForm"]["section"].value;

    if (name == "" || roll == "" || section == "") {
        alert("All fields must be filled out");
        return false;
    }

    window.location.href = "quiz.html";

    return false;
}

