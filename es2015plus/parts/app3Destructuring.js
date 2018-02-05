// We can Destructure property or function!!!
// Destructuring Assignment
// let a;
// let b;
// [a, b] = [100, 200];

// Rest pattern
// [a, b, c, ...rest] = [100, 200, 300, 400, 500]; // ... -> spread operator
// console.log(c);

// ({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// console.log(rest);

// Array Destructuring
// const people = ['nemanja', 'pera', 'mika'];
// const [person1, person2, person3] = people;
// console.log(person1);

// parse array returned from function
// function getPeople() {
//   return ['nemanja', 'pera', 'mika'];
// }
// let person1;
// let person2;
// let person3;
// [person1, person2, person3] = getPeople();

// Object Destructuring
const person = {
  name: 'Nemanja Nikolic',
  age: 30,
  city: 'Beograd',
  gender: 'male',
  sayHello: function () {
    console.log('Hello');
  },
};

// Old ES5
// const name = person.name;
// const age = person.age;
// const city = person.city;
// const gender = person.gender;

// NEW ES6 Destructuring
const { name, age, city, sayHello } = person;
console.log(name, age, city);

sayHello();
