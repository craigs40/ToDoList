const tasks = [
  {
    description: 'First Task',
    completed: false,
    index: 0,
  },
  {
    description: 'Second Task',
    completed: false,
    index: 1,
  },
  {
    description: 'Third Task',
    completed: false,
    index: 2,
  },
  {
    description: 'Fourth Task',
    completed: false,
    index: 3,
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
  toDoList.appendChild(listItem);
});

// Sort tasks by index
tasks.sort((a, b) => a.index - b.index);
