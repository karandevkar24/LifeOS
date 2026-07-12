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

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";

    displayTasks();

});

// Display Tasks
function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task, index){

        const li = document.createElement("li");
        li.className = "task";

        li.innerHTML = `
            <span>${task.text}</span>

            <button onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        taskList.appendChild(li);

    });

}

// Delete Task
function deleteTask(index){

    tasks.splice(index,1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();

}