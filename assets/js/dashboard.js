const user = JSON.parse(localStorage.getItem("lifeosUser"));

const welcome = document.getElementById("welcomeText");

if (user) {

    const hour = new Date().getHours();

    let greeting = "Hello";

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    welcome.innerHTML = `👋 ${greeting}, ${user.name}`;
}

// ----------------------
// TASK SUMMARY
// ----------------------

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const completed = tasks.filter(task => task.completed).length;

document.getElementById("taskSummary").textContent =
`${completed} / ${tasks.length} Completed`;