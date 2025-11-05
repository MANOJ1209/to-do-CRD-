const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
const emptyMsg = document.querySelector("#emptyMsg");

// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// tasks.forEach(task =>  renderTask(task));
// checkEmpty();

// addBtn.addEventListener("click", () => {
//   const text = input.value.trim();
//   if(!text) return alert("Enter a task!");

//   const task = { text, completed: false};
//   tasks.push(task);
//   saveTasks();
//   renderTask(task);

//   input.value = "";
//   checkEmpty();
// });

// input.addEventListener("keypress", e => {
//   if(e.key === 'Enter') addBtn.click();
// });

// function renderTask(task){
//   const li = document.createElement("li");
//   li.className = `task ${task.completed ? "completed" : ""}`;
//   li.textContent = task.text;

//   li.addEventListener("click", () => {
//     task.completed = !task.completed;
//     li.classList.toggle("completed");
//     saveTasks();
//   });

//   const del = document.createElement("button");
//   del.textContent  = "Delete";
//   del.className = "delete-btn";
//   del.addEventListener("click", e  => {
//     e.stopPropagation();
//     tasks = tasks.filter(t => t !== task);
//     li.remove();
//     saveTasks();
//     checkEmpty();
//   });

//   li.appendChild(del);
//   taskList.appendChild(li);
// }

// function saveTasks() {
//   localStorage.setItem("tasks",  JSON.stringify(tasks));
// }

// function checkEmpty(){
//   emptyMsg.style.display = tasks.length ? "none" : "block"
// }

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(task => renderTask(task));
checkEmpty();

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if(!text) return alert("Please enter something!");
  const task = {text, completed: false};
  tasks.push(task);
  saveTask();
  renderTask(task);
  
  input.value = "";
  checkEmpty();
});

input.addEventListener("keypress", e => {
  if(e.key === 'Enter') addBtn.click();
});

function renderTask(task){
  const li = document.createElement("li");
  li.className = `task ${task.completed ? "completed" : ""}`;
  li.textContent = task.text;

  li.addEventListener("click", () => {
    task.completed = !task.completed;
    li.classList.toggle("completed");
    saveTask();
  })

    const del = document.createElement("button");
    del.className = "delete-btn";
    del.textContent = "Delete";
    del.addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter(t => t !== task);
      li.remove();
      saveTask();
      checkEmpty();
    });

    li.appendChild(del);
    taskList.appendChild(li);
}



function saveTask(){
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function checkEmpty(){
  emptyMsg.style.display = tasks.length ? "none" : "block";
}
