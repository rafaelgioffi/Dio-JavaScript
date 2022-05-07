const form = document.getElementById('task-form');
const fulllist = document.getElementById('full-list');

form.onsubmit = function (e) {
    e.prevenDefault();
    const inputField = document.getElementById('newTask');
    addTask(inputField.value);
    form.reset();
};

function addTask(descr) {
    const taskContainer = document.createElement('div');
    const inpTask = document.createElement('input');
    const lblTask = document.createElement('label');
    const descTaskNode = document.createTextNode(descr);
    
    inpTask.setAttribute('type', 'checkbox');
    inpTask.setAttribute('name', descr);
    inpTask.setAttribute('id', descr);

    lblTask.setAttribute('for', descr);
    lblTask.appendChild(descTaskNode);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(inpTask);
    taskContainer.appendChild(lblTask);

    fulllist.appendChild(taskContainer);
    console.log(taskContainer);
}

