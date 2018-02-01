// document.getElementsByClassName  - HTML Collection

// const items = document.getElementsByClassName('collection-item');
//  console.log(items);
//  console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'hello';
//
// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// document.getElementsByTagName - HTML Collection

let lis = document.getElementsByTagName('li');

// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// items[4].textContent = 'nemanja';
// Convert HTML Collection into array
lis = Array.from(lis); // -> MORA se konvertovati u array
lis.forEach(function (li, index) {
  console.log(li.className);
  li.textContent = `${index} Hello`;
});

// console.log(lis);

// document.querySelectorAll - NodeList
// ->NE MORA se konvertovati u array
const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item) {
//   console.log(item);
// });

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (li) {
  li.style.background = '#ccc';
});

// -> we can use for loop with HTML Collection without convert into array
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#f4f4f4';
}

// console.log(items);
