// Strings
const name1 = 'nemanja';
const name2 = new String('nemanja');

// console.log(name1);
// console.log(name2);

name2.foo = 'bar';

// console.log(typeof name1);
// console.log(typeof name2);

// We can have problems with condition
// with == it will work, because it's comparing by value
// with === it WON'T work, because it's comparing by value and TYPE
if (name2 == 'nemanja') {
  console.log('Yes');
} else {
  console.log('No');
}

// Number
const num1 = 5;
const num2 = new Number(5);

// We can have problems with condition
// with == it will work, because it's comparing by value
// with === it WON'T work, because it's comparing by value and TYPE
// console.log(typeof num2);
if (num2 === 5) {
  console.log('Yes');
} else {
  console.log('No');
}

// We can have problems with condition
// with == it will work, because it's comparing by value
// with === it WON'T work, because it's comparing by value and TYPE
// Boolean
const bool1 = true;
const bool2 = new Boolean(true);
if (bool2 === true) {
  console.log('Yes');
} else {
  console.log('No');
}

// Functions
const getSum1 = function (x, y) {
  return x + y;
};

const getSum2 = new Function('x', 'y', 'return x + y');

console.log(getSum2(1, 1));

// Objects
const pera1 = {
  name: 'Pera',
};
const pera2 = new Object({ name: 'Pera' });

console.log(pera2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

console.log(arr1);
console.log(arr2);

// Regular Expressions
const re1 = /\w+/; // -> looking for word character that occurs one or more times
const re2 = new RegExp('\w+');

console.log(re1);
console.log(re2);
