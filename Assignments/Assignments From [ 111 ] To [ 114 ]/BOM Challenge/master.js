let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksHolder = document.querySelector(".tasks");
let tasksArray = [];
if (localStorage.getItem("tasks")) {
    tasksArray = JSON.parse(localStorage.getItem("tasks"));
}
getDataFromLocalStorage();
submit.addEventListener("click", () => {
    if (input.value !== "") {
        addTaskToArray(input.value);
        input.value = "";
        input.focus();
    }
});
tasksHolder.addEventListener("click", (ev) => {
    if (ev.target.classList.contains("del")) {
        deleteTaskWith(ev.target.parentElement.getAttribute("data-id"));
        ev.target.parentElement.remove();
    }
    if (ev.target.classList.contains("task")) {
        toggleStatusTaskWith(ev.target.getAttribute("data-id"));
        ev.target.classList.toggle("done");
    }
});
function addTaskToArray(taskText) {
    const task = {
        title: taskText,
        id: Date.now(),
        completed: false,
    };
    tasksArray.push(task);
    addElementsToPageFrom(tasksArray);
    addDataToLocalStorageFrom(tasksArray);
}
function addElementsToPageFrom(tasksArray) {
    tasksHolder.innerHTML = "";
    tasksArray.forEach((task) => {
        let div = document.createElement("div");
        div.className = "task";
        if (task.completed) {
            div.className = "task done";
        }
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title));
        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("Delete"));
        div.appendChild(span);
        tasksHolder.appendChild(div);
    });
}
function addDataToLocalStorageFrom(tasksArray) {
    window.localStorage.setItem("tasks", JSON.stringify(tasksArray));
}
function getDataFromLocalStorage() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
        addElementsToPageFrom(tasks);
    }
}
function deleteTaskWith(taskId) {
    tasksArray = tasksArray.filter((task) => task.id != taskId);
    addDataToLocalStorageFrom(tasksArray);
}
function toggleStatusTaskWith(taskId) {
    for (let i = 0; i < tasksArray.length; i++) {
        if (tasksArray[i].id == taskId) {
            tasksArray[i].completed == false
                ? (tasksArray[i].completed = true)
                : (tasksArray[i].completed = false);
        }
    }
    addDataToLocalStorageFrom(tasksArray);
}

// Extra Work
document.addEventListener("click", () => {
    let completedNum = document.getElementById("completed");
    let TotalTasks = document.querySelectorAll(".task");
    let completedTasks = document.querySelectorAll(".task.done");
    completedNum.innerHTML = `Completed: ${
        completedTasks.length < 10
            ? "0" + completedTasks.length
            : completedTasks.length
    } / ${
        TotalTasks.length < 10 ? "0" + TotalTasks.length : TotalTasks.length
    }`;
});
input.addEventListener("keypress", () => {
    let completedNum = document.getElementById("completed");
    let TotalTasks = document.querySelectorAll(".task");
    let completedTasks = document.querySelectorAll(".task.done");
    completedNum.innerHTML = `Completed: ${
        completedTasks.length < 10
            ? "0" + completedTasks.length
            : completedTasks.length
    } / ${
        TotalTasks.length < 10 ? "0" + TotalTasks.length : TotalTasks.length
    }`;
});
window.addEventListener("load", () => {
    let completedNum = document.getElementById("completed");
    let TotalTasks = document.querySelectorAll(".task");
    let completedTasks = document.querySelectorAll(".task.done");
    completedNum.innerHTML = `Completed: ${
        completedTasks.length < 10
            ? "0" + completedTasks.length
            : completedTasks.length
    } / ${
        TotalTasks.length < 10 ? "0" + TotalTasks.length : TotalTasks.length
    }`;
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        if (input.value !== "") {
            addTaskToArray(input.value);
            input.value = "";
            input.focus();
        }
    }
});
