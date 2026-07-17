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
document.getElementById("profileName").textContent = user.name;

const options = {
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric"
};

document.getElementById("todayDate").textContent =
new Date().toLocaleDateString("en-US",options);

// ----------------------
// TASK SUMMARY
// ----------------------

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const completed = tasks.filter(task => task.completed).length;

document.getElementById("taskSummary").textContent =
`${completed} / ${tasks.length} Completed`;
function updateClock(){

    const now = new Date();

    document.getElementById("liveClock").textContent =
        now.toLocaleTimeString();

}

updateClock();

setInterval(updateClock,1000);
const progress =
tasks.length === 0
? 0
: Math.round((completed/tasks.length)*100);

document.getElementById("dailyProgress").style.width =
progress + "%";

document.getElementById("progressText").textContent =
progress + "% Completed";
const activityList =
document.getElementById("activityList");

if(activityList){

    const activities =
    JSON.parse(localStorage.getItem("activities")) || [];

    activityList.innerHTML = "";

    if(activities.length===0){

        activityList.innerHTML =
        "<li>No recent activity.</li>";

    }else{

        activities.forEach(activity=>{

            const li =
            document.createElement("li");

            li.textContent = activity;

            activityList.appendChild(li);

        });

    }

}