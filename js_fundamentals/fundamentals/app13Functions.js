// FUNCTION DECLARATIONS

function greet(firstName = '', lastName = '') {
  // if(typeof firstName === 'undefined'){firstName = '';}
  // if(typeof lastName === 'undefined'){lastName = '';}
  // console.log('Hello');
  return `hello ${firstName} ${lastName}`;
}

// console.log(greet());

// FUNCTION EXPRESSIONS
// without name -> anonymus function
const square = function (x = 0) {
  return x * x;
};

// console.log(square());

// IMMIDIATLEY INOKABLE FUNCTION EXPRESSIONS - IIFEs
// declare and run at the same time!!!

// (function () {
//   console.log('iffe ran..');
// })();

// (function (name) {
//   console.log(`hello ${name}`);
// })('Nemanja');

// PROPERTY METHODS
// when function is putted inside of and object we call this a method!
const todo = {
  add: function () {
    console.log('add todo');
  },

  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log('Delete todo');
};

todo.add();
todo.edit(22);
todo.delete();
