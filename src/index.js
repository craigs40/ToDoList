let toDoList = document.getElementById('toDoList');
let addBtn = document.getElementById('add');
let clear = document.getElementById('clear');
let taskInput = document.getElementById('task-input');

let tasksList = [];

createTask = () => {
  if (taskInput.value === '') {
    alert('Please enter a task');
  } else {
    let tasks = {
      description: taskInput.value,
      completed: false,
      index: tasksList.length,
    };
    let listItem = document.createElement('li');

    listItem.innerHTML = `
    <input type="checkbox" class="checkbox">
    <p class="paragraph">${taskInput.value}</p>
    <i id="delete" class="fas fa-trash-alt delete"></i>
    `;
    toDoList.appendChild(listItem);

    tasksList.push(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasksList));
  }
  taskInput.value = '';
};

deleteTask = (removeElement) => {
  removeElement.parentElement.remove();
  localStorage.setItem('tasks', JSON.stringify(tasksList));
};

toggleComplete = (inputElement) => {
  if (inputElement.checked === false) {
    inputElement.parentElement.classList.remove('complete');
  } else {
    inputElement.parentElement.classList.add('complete');
    tasks.completed = true;
    localStorage.setItem('tasks', JSON.stringify(tasksList));
  }
};

clearComplete = () => {
  let completeTasks = document.querySelectorAll('.complete');
  completeTasks.forEach((task) => {
    task.remove();
    localStorage.setItem('tasks', JSON.stringify(tasksList));
  });
};

addBtn.addEventListener('click', createTask);

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    createTask();
  }
});

toDoList.addEventListener('click', (e) => {
  switch (e.target.tagName) {
    case 'I':
      deleteTask(e.target);
      localStorage.setItem('tasks', JSON.stringify(tasksList));
      break;
  }
});

toDoList.addEventListener('change', (e) => {
  if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    toggleComplete(e.target);
  }
});

clear.addEventListener('click', clearComplete);
