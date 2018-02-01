// var, let, const
var name = 'Nemanja Nikolic';
console.log(name);
name = 'pera peric';
console.log(name);
//
// Init app
var greeting;
console.log(greeting);
greeting = 'hello';
console.log(greeting);
//
// // letters, numbers, _, $
// // can not start with number
//
// // Multi word vars
var firstName = 'Nemanja'; // Camel case
var first_name = 'pera'; // Underscore -> zali se linter :)
var FirstName = 'Mikica'; // Pascal case -> for es6 class name :)

// LET
let full;
full = 'Nemanja Nikolic';
console.log(name);
full = 'pera peric';
console.log(name);

// CONST
const fname = 'Nemanja Nikolic'; // we have to assign a value
console.log(name);
// fname = 'pera peric'; // can not change value!!!

const person = {
  name: 'Nemanja',
  age: 30,
};

// mozemo da promenimo vrednost property.ja iako je object const
person.name = 'Mika'; // mutating object
console.log(person);
