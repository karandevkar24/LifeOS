const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Load saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

// Add Task
addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });
    addActivity("➕ Added: " + taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    displayTasks();

});

// Display Tasks
function displayTasks() {

    taskList.innerHTML = "";

    let completedCount = 0;

    tasks.forEach(function(task, index){

        if(task.completed){
            completedCount++;
        }

        const li = document.createElement("li");
        li.className = "task";

        li.innerHTML = `
            <div class="task-left">

                <input
                    type="checkbox"
                    ${task.completed ? "checked" : ""}
                    onchange="toggleTask(${index})">

                <span class="${task.completed ? "completed" : ""}">
                    ${task.text}
                </span>

            </div>

            <div>

                <button onclick="editTask(${index})">
                    Edit
                </button>

                <button onclick="deleteTask(${index})">
                    Delete
                </button>

            </div>
        `;

        taskList.appendChild(li);

    });

    document.getElementById("progressText").textContent =
        `Completed ${completedCount} of ${tasks.length} Tasks`;

}

// Delete Task
function deleteTask(index){

    const deletedTask = tasks[index].text;

    tasks.splice(index,1);

    addActivity("🗑 Deleted: " + deletedTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();

}
function toggleTask(index){

    tasks[index].completed = !tasks[index].completed;

    if(tasks[index].completed){

        addActivity("✅ Completed: " + tasks[index].text);

    }else{

        addActivity("↩ Marked Pending: " + tasks[index].text);

    }

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();

}


function editTask(index){

    const newTask = prompt("Edit your task:", tasks[index].text);

    if(newTask === null){
        return;
    }

    if(newTask.trim() === ""){
        alert("Task cannot be empty.");
        return;
    }

    tasks[index].text = newTask.trim();

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();

}
function addActivity(message){

    let activities =
    JSON.parse(localStorage.getItem("activities")) || [];

    activities.unshift(message);

    if(activities.length > 8){

        activities.pop();

    }

    localStorage.setItem(
        "activities",
        JSON.stringify(activities)
    );

}
