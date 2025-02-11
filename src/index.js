document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value;

    if (taskText) {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  });
});
