// Create some arrays
const numbers = [
  43,
  56,
  33,
  23,
  44,
  36,
  5,
];
const numbers2 = new Array(22, 45, 33, 55, 11);
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mixed = [
  22,
  'hello',
  true,
  undefined,
  null, {
    a: 1,
    b: 2,
  },
  new Date(),
];

let val;

// Get array length
val = numbers.length;

// check if is array
val = Array.isArray(numbers);

// get a single value
val = numbers[3];

// insert into array
numbers[2] = 100;

// find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
// add on to end
// numbers.push(250);
// add on to front
// numbers.unshift(120);
// take off from end
// numbers.pop();
// take off from start
// numbers.shift(120);

// Splice vlaues
// numbers.splice(1, 3);  -> from - to
// Reverse array
// numbers.reverse();

// Concatenate arrays
val = numbers.concat(numbers2);

// Sort array
// val = fruit.sort();
// val = numbers.sort(); // -> sorting by first number, from first number
// use compare function
// val = numbers.sort(function(a, b) {
//   return a - b;
// });

// reverse sort
// val = numbers.sort(function(a, b) {
//   return b - a;
// });

// find
function over50(num) {
  return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);
