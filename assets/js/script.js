var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  // create list itm
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  // create div to hold task info and add it to list item
  var taskInfoEL = document.createElement("div");
  // give it a class name
  taskInfoEL.className = "task-info";
  // add HTMLcontent to div
  taskInfoEL.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
  listItemEl.appendChild(taskInfoEL);
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
