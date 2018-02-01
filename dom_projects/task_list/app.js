// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // DOM load event -> obrati paznju!!
  document.addEventListener('DOMContentLoaded', loadTasks);
  // Add task event
  form.addEventListener('submit', addTask);

  // Remove task event - Event delegation
  taskList.addEventListener('click', removeTask);

  // Clear tasks
  clearBtn.addEventListener('click', clearTasks);

  // Filter tasks
  filter.addEventListener('keyup', filterTasks);
}

// Get tasks from localStorage
function loadTasks() {
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // -> must parse to json object from string!!
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  if (tasks !== null) {
    for (let i = 0; i < tasks.length; i++) {
      createLi(tasks[i]);
    }
  }
}

function filterTasks(e) {
  // I way - My way
  // let tasks = Array.from(taskList.children);
  // let text = e.target.value.toLowerCase();
  // tasks.forEach(function(task) {
  //   if (task.innerText.toLowerCase().indexOf(text) === -1) {
  //     task.style.display = 'none';
  //   } else {
  //     task.style.display = 'block';
  //   }
  // });

  // II way
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

// Clear tasks
function clearTasks() {
  // I way to do
  // -> HTML collection, convert into array -> my way :)
  // let tasks = Array.from(taskList.children);
  // tasks.forEach(function (task) {
  //   task.remove();
  // });
  // II way to do
  // taskList.innerHTML = '';
  // III way to do - fastest
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // localStorage.removeItem('tasks'); ->removes only tasks in localStorage
  localStorage.clear(); // -> clear everything in localStorage
}

// Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();

      // Remove from localStorage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  };
}

// Create li
function createLi(text) {
  // Create li element
  const li = document.createElement('li');
  li.className = 'collection-item';

  // Create text node and append to li
  li.appendChild(document.createTextNode(text));

  // Create new link
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';

  // Add icon
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // Append link
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

}

// Add task
function addTask(e) {
  e.preventDefault();
  if (taskInput.value === '') {
    alert('Add a Task');
  }
  // Create li element
  createLi(taskInput.value);

  // Store in localStorage
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = '';
}

// Store task in localStorage
function storeTaskInLocalStorage(text) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // -> must parse to json object from string!!
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(text);
  // -> must be stored like a string - stringify
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(li) {
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    // -> must parse to json object from string!!
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  let indexInArray = tasks.indexOf(li.textContent);
  if (indexInArray !== -1) {
    tasks.splice(indexInArray, 1);
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
}
