console.log("this file is working");
const form = document.querySelector("#form"),
  input = document.querySelector("#input"),
  list = document.querySelector("#list");

let tasks = [];

const existingTasks = JSON.parse(localStorage.getItem("tasks"));

if (existingTasks) {
  tasks = existingTasks;
}

function renderTask() {
  list.innerHTML = "";
  // const
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    const button = document.createElement("button");
    button.textContent = "Delete";

    //   button.addEventListener("click", () => {
    //       tasks.slice(index, 1)
    //   })

    list.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

form.addEventListener("submit", (event) => {
  // preventing the website from refreshing
  event.preventDefault();

  const task = input.value.trim();

  if (task.length <= 3) {
    return alert("input value needs to be greater than 3 values");
  } else {
    tasks.push(task);
    renderTask();
    input.value = "";
  }

  console.log("this site is not refreshing");
});

renderTask();
