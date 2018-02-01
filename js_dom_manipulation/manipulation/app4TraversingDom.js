let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// get child nodes

val = list.childNodes; // -> NodeList
val = list.childNodes[0];
val = list.childNodes[0].nodeType;

// 1 - Element
// 2 - Attribute (depricated)
// 3 - Text node
// 8 - Comment   -> <!-- commented text -->
// 9 - Document itself
// 10 - Doctype

// Get children element nodes

val = list.children; // -> HTML Collection
val = list.children[1].textContent = 'Hello';

// Get children of children

val = list.children[3].children[0].id = 'test-link';
val = list.children[3].children;

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements of selected element
val = list.childElementCount;

// Get parent node

val = listItem.parentNode;

val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextElementSibling;

// Get prev sibling
val = listItem.previousElementSibling;

console.log(val);
