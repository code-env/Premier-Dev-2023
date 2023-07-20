const form = document.querySelector("#form");
const input = document.querySelector("#input");
const list = document.querySelector("#list");
const toggle = document.querySelector("#toggle");
const container = document.querySelector(".container");

let tasks = [];

if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
}

function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.addEventListener("click", () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    });
    li.appendChild(button);
    list.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = input.value.trim();
  if (task) {
    tasks.push(task);
    renderTasks();
    input.value = "";
  }
});

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  container.classList.toggle("dark");
});

renderTasks();
