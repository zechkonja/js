// Create element

const li = document.createElement('li');

// Add Class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// create i element - one way
// const i = document.createElement('i');
// i.className = 'fa fa-remove';

// create a element
const a = document.createElement('a');
a.setAttribute('href', '#');
a.className = 'delete-item secondary-content';
a.innerHTML = '<i class="fa fa-remove"></i>';

// append i
// a.appendChild(i);

// append a
li.appendChild(a);

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Append element as child

document.querySelector('ul.collection').appendChild(li);

const val = document.querySelector('ul');
console.log(val.children[0].children[0].children);

// console.log(li);
