document.addEventListener("DOMContentLoaded", () => {
    const addTaskButtons = document.querySelectorAll(".add-task-btn");
    const taskLists = document.querySelectorAll(".task-list");

    addTaskButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const status = button.getAttribute("data-status");
            const taskText = prompt("Enter Task Description:");
            if (taskText) {
                createTask(taskText, status);
            }
        });
    });

    taskLists.forEach((list) => {
        list.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        list.addEventListener("drop", (event) => {
            const taskId = event.dataTransfer.getData("text");
            const taskElement = document.getElementById(taskId);
            list.appendChild(taskElement);
        });
    });
});

function createTask(taskText, status) {
    const taskList = document.querySelector(`.task-list[data-status="${status}"]`);
    const taskId = `task-${Date.now()}`;
    const taskElement = document.createElement("div");

    taskElement.className = "task";
    taskElement.id = taskId;
    taskElement.textContent = taskText;
    taskElement.draggable = true;

    taskElement.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text", taskId);
    });

    taskList.appendChild(taskElement);
}
