const EventEmitter = require("events");

const student = new EventEmitter();

// Login event
student.on("login", () => {
    console.log("Logged in successfully");
});

// Assignment event
student.on("assignment", () => {
    console.log("Assignment submitted successfully");
});

// Logout event
student.on("logout", () => {
    console.log("Logged out successfully");
});

// Exit event
student.on("exit", () => {
    console.log("Exit successfully");
});

// Trigger events
student.emit("login");
student.emit("assignment");
student.emit("logout");
student.emit("exit");