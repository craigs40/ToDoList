let toDoList = document.getElementById('toDoList');
let addBtn = document.getElementById('add');
let clear = document.getElementById('clear');
let taskInput = document.getElementById('task-input');

let tasksList = [];
let tasks = {
  description: taskInput.value,
  completed: false,
  index: tasksList.length,
};

createTask = () => {
  if (taskInput.value === '') {
    alert('Please enter a task');
  } else {
    let listItem = document.createElement('li');

    listItem.innerHTML = `
    <input type="checkbox" class="checkbox">
    <p class="paragraph">${taskInput.value}</p>
    <i id="delete" class="fas fa-trash-alt delete"></i>
    `;
    toDoList.appendChild(listItem);
  }
  taskInput.value = '';
};

deleteTask = (removeElement) => {
  removeElement.parentElement.remove();
};

toggleComplete = (inputElement) => {
  if (inputElement.checked === false) {
    inputElement.parentElement.classList.remove('complete');
  } else {
    inputElement.parentElement.classList.add('complete');
    tasks.completed = true;
  }
};

clearComplete = () => {
  let completeTasks = document.querySelectorAll('.complete');
  completeTasks.forEach((task) => {
    task.remove();
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
      break;
  }
});

toDoList.addEventListener('change', (e) => {
  if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    toggleComplete(e.target);
  }
});

clear.addEventListener('click', clearComplete);
