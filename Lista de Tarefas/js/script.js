let tasks = [];

function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button onclick="toggleTask(${index})"><i class="far fa-check-circle"></i></button>
            <button onclick="removeTask(${index})"><i class="far fa-trash-alt"></i></button>
        `;
        taskList.appendChild(listItem);
    });
}

function addTask() {
    const newTaskInput = document.getElementById("new-task");
    const text = newTaskInput.value.trim();

    if (text !== "") {
        tasks.push({ text, completed: false });
        newTaskInput.value = "";
        renderTasks();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

renderTasks();
