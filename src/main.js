import "./style.css"

const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {
  const taskText = input.value;

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;
  li.classList.add("bg-gray-200", "p-3", "rounded-lg", "mb-2", "shadow");

  list.appendChild(li);

  input.value = "";
});