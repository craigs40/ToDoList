/* eslint-disable no-undef */
const toDoList = document.getElementById('toDoList');
const addBtn = document.getElementById('add');
const clear = document.getElementById('clear');
const taskInput = document.getElementById('task-input');

const tasksList = [];

createTask = () => {
  if (taskInput.value === '') {
    alert('Please enter a task');
  } else {
    const tasks = {
      description: taskInput.value,
      completed: false,
      index: tasksList.length,
    };
    const listItem = document.createElement('li');

    listItem.innerHTML = `
    <input type="checkbox" class="checkbox">
    <p class="paragraph">${taskInput.value}</p>
    <i id="delete" class="fas fa-trash-alt delete"></i>
    `;
    listItem.setAttribute('draggable', true);
    listItem.classList.add('draggable');
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
  const completeTasks = document.querySelectorAll('.complete');
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

const list_items = document.querySelectorAll('.draggable');
const lists = document.querySelectorAll('.container');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
  const item = list_items[i];

  item.addEventListener('dragstart', function () {
    draggedItem = item;
    setTimeout(function () {
      item.style.display = 'none';
    }, 0);
  });

  item.addEventListener('dragend', function () {
    setTimeout(function () {
      draggedItem.style.display = 'block';
      draggedItem = null;
    }, 0);
  });

  for (let j = 0; j < lists.length; j++) {
    const list = lists[j];

    list.addEventListener('dragover', function (e) {
      e.preventDefault();
    });

    list.addEventListener('dragenter', function (e) {
      e.preventDefault();
      this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
    });

    list.addEventListener('dragleave', function () {
      this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    });

    list.addEventListener('drop', function () {
      console.log('drop');
      this.append(draggedItem);
      this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    });
  }
}
