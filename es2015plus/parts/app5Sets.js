// SETS- ALWAYS UNIQUE
// Store unique values of any type
const set1 = new Set([
  1,
  2,
  33,
  45,
  2,
  5,
  4,
  8,
  76,
  1,
  44,
]);

// console.log(set1);

const set2 = new Set();

set2.add(100);
set2.add('a string');
set2.add({ name: 'Nemanja' });
set2.add(true);
set2.add(100);
set2.add('a string');

// console.log(set2);
// console.log(set2.size);

// Check for values
// console.log(set2.has(50 + 50)); // true
// console.log(set2.has({ name: 'Nemanja' })); // false

// Delete from set
// set2.delete(100);
// console.log(set2);

// Itterate throut sets

// for..of
// for(let item of set2.keys()) {
//   console.log(item);
// }

// forEach`
// set2.forEach((value) => {
//   console.log(value);
// });

// CONVERT sets into arrays

const setArray = Array.from(set2);
console.log(setArray);
