function displayInfo() {
    // Get the values from the input fields
    var studentName = document.getElementById("studentName").value;
    var studentId = document.getElementById("studentId").value;
    var m1 = parseFloat(document.getElementById("m1").value) || 0;
    var m2 = parseFloat(document.getElementById("m2").value) || 0;
    var m3 = parseFloat(document.getElementById("m3").value) || 0;
    var m4 = parseFloat(document.getElementById("m4").value) || 0;
    var m5 = parseFloat(document.getElementById("m5").value) || 0;
    var m6 = parseFloat(document.getElementById("m6").value) || 0;

    // Calculate total marks and percentage
    var totalMarks = m1 + m2 + m3 + m4 + m5 + m6;
    var percentage = (totalMarks / 600) * 100;

    // Display the information
    document.getElementById("info").innerHTML = "Student Name: " + studentName + "<br>" +
        "Student ID: " + studentId + "<br>" +
        "Math: " + m1 + "<br>" +
        "Science: " + m2 + "<br>" +
        "English: " + m3 + "<br>" +
        "History: " + m4 + "<br>" +
        "Geography: " + m5 + "<br>" +
        "Total Marks: " + totalMarks + "<br>" +
        "Percentage: " + percentage.toFixed(2) + "%";
}