//import _ from 'lodash';

const tasks = [
  {
    description: 'First Task',
    completed: false,
    index: 1,
  },
  {
    description: 'Second Task',
    completed: false,
    index: 2,
  },
  {
    description: 'Third Task',
    completed: false,
    index: 3,
  },
  {
    description: 'Fourth Task',
    completed: false,
    index: 4,
  },
];

//Write a function to iterate over the tasks array and populate an HTML list item element for each task.

const displayTasks = () => {
  tasks.forEach((task) => {
    const html = `
      <li class="task-${task.index}">
        <div class="task">
          <input type="checkbox" name="task"> ${task.description}
        </div>
        <i class="fas fa-ellipsis-v three-dot-icon"></i>
      </li>
      `;
    inputItem.insertAdjacentHTML('afterend', html);
  });
};
displayTasks();