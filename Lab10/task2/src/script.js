let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

let arrayOfTasks = [];

// Check if Theres Tasks In Local Storage
if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
  getDataFromLocalStorage();
}

// Add Task
submit.onclick = function (e) {
  e.preventDefault();
  if (input.value !== "") {
    addTaskToArray(input.value);
    input.value = "";
  }
};

tasksDiv.addEventListener("click", (e) => {
  // Delete Button
  if (e.target.classList.contains("delSpan")) {
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));

    e.target.parentElement.remove();
  }
  // done Button
  if (e.target.classList.contains("doneSpan")) {
    toggleStatusTaskWith(e.target.parentElement.getAttribute("data-id"));
    // console.log(e.target.parentElement.getAttribute("data-id"));

    e.target.parentElement.classList.toggle("done");
    // e.target.innerHTML.toggle("done");
  }
});

function addTaskToArray(taskText) {
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };

  arrayOfTasks.push(task);

  addElementsToPageFrom(arrayOfTasks);

  addDataToLocalStorageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
  tasksDiv.innerHTML = "";

  arrayOfTasks.forEach((task) => {
    // Create Main Div
    let div = document.createElement("div");
    div.className = "task";
    // Check If Task is Done
    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    let taskText = document.createElement("p");
    taskText.appendChild(document.createTextNode(task.title));

    // Create Done Button
    let doneSpan = document.createElement("span");
    doneSpan.className = "doneSpan";
    doneSpan.appendChild(document.createTextNode("Done"));
    div.appendChild(taskText);

    // Create Delete Button
    let delSpan = document.createElement("span");
    delSpan.className = "delSpan";
    delSpan.appendChild(document.createTextNode("Delete"));
    // Append Buttons To Main Div
    div.appendChild(delSpan);
    div.appendChild(doneSpan);

    tasksDiv.appendChild(div);
  });
}

function addDataToLocalStorageFrom(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementsToPageFrom(tasks);
  }
}

function deleteTaskWith(taskId) {
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataToLocalStorageFrom(arrayOfTasks);
}

function toggleStatusTaskWith(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false
        ? (arrayOfTasks[i].completed = true)
        : (arrayOfTasks[i].completed = false);
    }
  }
  addDataToLocalStorageFrom(arrayOfTasks);
}
