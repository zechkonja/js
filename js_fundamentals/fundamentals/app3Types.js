// Primitive data types
// String
// Number
// Boolean
// Null -> intentional empty value
// Undefined -> has not been assigned value
// Symbols (ES6)

const name = 'Nemanja';
// console.log(typeof name);
const age = new Number(45.45); 
console.log(typeof age);
const hasKids = true;
// console.log(typeof hasKids);
const car = null;

// bug javascript - pisace Object ali je primitive object
// console.log(typeof car);
let test;
// console.log(typeof test);
const sym = Symbol();
// console.log(typeof sym);

// References types
// Arrays
// Object Literals
// Functions
// Dates
// Anything else...

const hobbies = ['movies', 'music'];
// console.log(typeof hobbies);

const address = {
  city: 'Boston',
  state: 'MA',
};
// console.log(typeof address);

const today = new Date();
// console.log(typeof today);
