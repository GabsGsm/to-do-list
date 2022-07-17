var entradaTarefa = document.querySelector("#entrada-tarefa");
var addTarefa = document.querySelector("#add-tarefa");
var listTask = document.querySelector("#list-task");

addTarefa.addEventListener("click", () => {
    const description = entradaTarefa.value;
    const item = document.createElement("li")
    const task = document.createElement("div")
    const newTask = document.createElement("input")
    const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

    newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);
    
    taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

    task.classList.add('task');
    task.appendChild(newTask);
	task.appendChild(taskLabel);

    item.appendChild(task);

    listTask.appendChild(item)
});