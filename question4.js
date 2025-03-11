let task = [];

function generateId() {
    return tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
}

function addTask(name, description) {
    const newTask = {
        id: generateId();
        name: name,
        description: description
    }

    tasks.push(newtask);
    return newTask;
}

function getAllTasks() {
    return tasks;
}

function getTaskById(id) {
    return tasks.find(task => task.id === id);
}

function updateTask(id, updatedName, updatedDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = updatedName || task.name;
        task.description = updatedDescription || task.description;
        return task;
    }
    return null; 
}

function deleteTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        return true; 
    }
    return false;
}