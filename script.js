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

// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// tasks.forEach(task => renderTask(task));
// checkEmpty();

// addBtn.addEventListener("click", () => {
//   const text = input.value.trim();
//   if(!text) return alert("Enter a task");

//   const task = {text, completed: false};
//   tasks.push(task);
//   saveTask();
//   renderTask(task);

//   input.value = "";
//   checkEmpty();
// });

// input.addEventListener("keypress", (e) => {
//   if(e.key === 'Enter') addBtn.click();
// });

// function renderTask(task){
//   const li = document.createElement("li");
//   li.className = `task ${task.completed ? "completed" : ""}`;

//   const span = document.createElement("span");
//   span.textContent = task.text;
//   li.appendChild(span);

//   span.addEventListener("click", () => {
//     task.completed = !task.completed;
//     span.classList.toggle("completed");
//     saveTask();
//   });

//   let actions = document.createElement("div");
//   actions.className = "actions";

//   //Edit btn
//   const editBtn = document.createElement("button");
//   editBtn.className = "edit-btn";
//   editBtn.textContent = "Edit";

//   editBtn.addEventListener("click", (e) => {
//     e.stopPropagation();

//     const inputBox = document.createElement("input");
//     inputBox.type = "text";
//     inputBox.value = task.text;
//     inputBox.className = "edit-input";

//     const saveBtn = document.createElement("button");
//     saveBtn.textContent = "Save";

//     const cancelBtn = document.createElement("button");
//     cancelBtn.textContent = "Cancel";

//     li.innerHTML = "";
//     li.appendChild(inputBox);
//     li.appendChild(saveBtn);
//     li.appendChild(cancelBtn);

//     saveBtn.addEventListener("click", () => {
//       const newText = inputBox.value.trim();
//       if(!newText) return alert("Task cannot be empty");

//       task.text = newText;
//       saveTask();

//       li.innerHTML = "";
//       renderTask(task);
//       li.remove();
//     });

//     cancelBtn.addEventListener("click", () => {
//       li.innerHTML = "";
//       renderTask(task);
//       li.remove();
//     });
//   });

//   const deleteBtn = document.createElement("button");
//   deleteBtn.className = "delete-btn";
//   deleteBtn.textContent = "Delete"

//   deleteBtn.addEventListener("click", (e) => {
//     e.stopPropagation();
//     tasks = tasks.filter(t => t !== task);
//     li.remove();
//     saveTask();
//     checkEmpty();
//   });

//   actions.appendChild(editBtn);
//   actions.appendChild(deleteBtn);
//   li.appendChild(actions);

//   taskList.appendChild(li);
// }

// function saveTask(){
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function checkEmpty(){
//   emptyMsg.style.display = tasks.length ? "none" : "block";
// }

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach((task) => renderTask(task));
checkEmpty();

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return alert("Enter a task");

  const task = { text, completed: false };
  tasks.push(task);
  saveTasks();
  renderTask(task);

  input.value = "";
  checkEmpty();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addBtn.click();
});

function renderTask(task) {
  const li = document.createElement("li");
  li.className = "task";

  const span = document.createElement("span");
  span.textContent = task.text;

  if (task.completed) span.classList.add("completed");
  li.appendChild(span);

  span.addEventListener("click", () => {
    task.completed = !task.completed;
    span.classList.toggle("completed");
    saveTasks();
  });

  const actions = document.createElement("div");
  actions.className = "actions";

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.textContent = "Edit";

  editBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    const inputBox = document.createElement("input");
    inputBox.type = "text";
    inputBox.value = task.text;
    inputBox.className = "edit-input";

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.className = "save-btn"

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.className = "cancel-btn"

    // Replace text span with input field
    li.replaceChild(inputBox, span);

    // Swap Edit/Delete with Save/Cancel
    actions.innerHTML = "";
    actions.appendChild(saveBtn);
    actions.appendChild(cancelBtn);

    saveBtn.addEventListener("click", () => {
      const newText = inputBox.value.trim();
      if (!newText) return alert("Task cannot be empty");

      task.text = newText;
      saveTasks();

      span.textContent = newText;
      li.replaceChild(span, inputBox);

      actions.innerHTML = "";
      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);
    });

    cancelBtn.addEventListener("click", () => {
      li.replaceChild(span, inputBox);
      actions.innerHTML = "";
      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);
    });
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    tasks = tasks.filter((t) => t !== task);
    li.remove();
    saveTasks();
    checkEmpty();
  });

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(actions);
  taskList.prepend(li);
}

// function renderTask(task) {
//   const li = document.createElement("li");
//   li.className = "task";

//   const span = document.createElement("span");
//   span.textContent = task.text;

//   if (task.completed) span.className = "completed";
//   li.appendChild(span);

//   span.addEventListener("click", () => {
//     task.completed = !task.completed;
//     span.classList.toggle("completed");
//     saveTasks();
//   });

//   const actions = document.createElement("div");
//   actions.className = "actions";

//   const editBtn = document.createElement("button");
//   editBtn.className = "edit-btn";
//   editBtn.textContent = "Edit";

//   editBtn.addEventListener("click", (e) => {
//     e.stopPropagation();

//     const inputBox = document.createElement("input");
//     inputBox.type = "text";
//     inputBox.value = task.text;

//     const saveBtn = document.createElement("button");
//     saveBtn.className = "save-btn";
//     saveBtn.textContent = "Save";

//     const cancelBtn = document.createElement("button");
//     cancelBtn.className = "cancel-btn";
//     cancelBtn.textContent = "Cancel";

//     li.replaceChild(inputBox, span);
//     actions.innerHTML = "";
//     actions.appendChild(saveBtn);
//     actions.appendChild(cancelBtn);

//     saveBtn.addEventListener("click", (e) => {
//       e.stopPropagation();

//       const newText = inputBox.value.trim();
//       if(!newText) return alert("Task is required");
//       task.text = newText;
//       saveTasks();

//       span.textContent = newText;
//       li.replaceChild(span, inputBox);
//       actions.innerHTML = "";
//       actions.appendChild(editBtn);
//       actions.appendChild(deleteBtn);
//     })



//     cancelBtn.addEventListener("click", (e) => {
//       e.stopPropagation();

//       li.replaceChild(span, inputBox);
//       actions.innerHTML =  "";
//       actions.appendChild(editBtn);
//       actions.appendChild(deleteBtn);
//     });
//   });

//   const deleteBtn = document.createElement("button");
//   deleteBtn.className = "delete-btn";
//   deleteBtn.textContent = "Delete";

//   deleteBtn.addEventListener("click", e => {
//     e.stopPropagation();

//     tasks = tasks.filter(t => t !== task);
//     li.remove();
//     saveTasks();
//     checkEmpty();
//   })

//   actions.appendChild(editBtn);
//   actions.appendChild(deleteBtn);

//   li.appendChild(actions);
//   taskList.prepend(li);
// }

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function checkEmpty() {
  emptyMsg.style.display = tasks.length ? "none" : "block";
}
