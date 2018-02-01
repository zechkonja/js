// REPLACE ELEMENT

// Create element
const newHeading = document.createElement('h2');

//Add id
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// get the old heading
const oldHeading = document.getElementById('task-title');

// We need parent
const cardAction = document.querySelector('.card-action');

// Actual replace!!!!!
cardAction.replaceChild(newHeading, oldHeading);

//REMOVE ELEMENT

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove list item
lis[0].remove();

// remove child element
list.removeChild(lis[3]);

// CLASSES AND ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
val = link.classList[0];

link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
val = link;
link.removeAttribute('title');

console.log(val);
