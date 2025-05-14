// Change title text dynamically
document.getElementById("main-title").textContent = "Your Daily Goals";

// Add a task
function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();
  
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Remove task on click
  li.addEventListener("click", () => {
    li.remove();
  });

  document.getElementById("task-list").appendChild(li);
  input.value = "";
}

// Toggle background color dynamically
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}
