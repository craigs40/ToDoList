/*
const tasks = [
  {
    description: 'First Task',
    completed: false,
    index: 0,
  },
];

// Function to iterate over the tasks array and populate an HTML list item element for each task.
tasks.forEach((task) => {
  const toDoList = document.getElementById('toDoList');
  const listItem = document.createElement('li');
  listItem.innerHTML = `
  <input type="checkbox" ${task.completed ? 'checked' : ''}>
  <span>${task.description}</span>
  `;
  //toDoList.appendChild(listItem);
  // Sort tasks by index
  tasks.sort((a, b) => a.index - b.index);

  // Local Storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
});
*/

let toDoList = document.getElementById('toDoList');
let addBtn = document.getElementById('add');
let taskInput = document.getElementById('task-input');

createTask = () => {
  let task = taskInput.value;
  if (task === '') {
    alert('Please enter a task');
  } else {
    let listItem = document.createElement('li');

    let checkbox = document.createElement('input');
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';

    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = task;

    let deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

    listItem.appendChild(checkbox);
    listItem.appendChild(paragraph);
    listItem.appendChild(deleteBtn);
    toDoList.appendChild(listItem);

    taskInput.value = '';
  }
};

addBtn.addEventListener('click', createTask);

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    createTask();
  }
});
