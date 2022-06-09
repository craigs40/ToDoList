let toDoList = document.getElementById('toDoList');
let addBtn = document.getElementById('add');
let trash = document.getElementById('delete');
let taskInput = document.getElementById('task-input');
/*let tasks = [
  {
    description: taskInput.value,
    completed: false,
    index: tasks.length,
  },
];*/

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

    // Sort tasks by index
    //task.sort((a, b) => a.index - b.index);

    taskInput.value = '';
  }
};

deleteTask = (removeElement) => {
  removeElement.parentElement.remove();
};

// Local Storage
//localStorage.setItem('tasks', JSON.stringify(tasks));

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
    toggleComplete();
  }
});
