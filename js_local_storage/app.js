// Set local storge item  10mb
// Ostaje dok ga rucno ne obrisemo, cak i kad se ugasi browser!!!
localStorage.setItem('name', 'Nemanja');
localStorage.setItem('age', '30');

// Remove item
// localStorage.removeItem('name');

// Get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name.concat(' ', age));

// Clear everything
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const task = document.getElementById('task').value;
  console.log(task);

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task Saved');
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function (task) {
  console.log(task);
});

// Set session storage  5mb
// Nestaje kada ugasimo browser
// Nsetaje i kada ugasimo tab!
// sessionStorage.setItem('surname', 'Nikolic');
