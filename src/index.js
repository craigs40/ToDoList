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

const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach((draggable) => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

containers.forEach((container) => {
  container.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
});
