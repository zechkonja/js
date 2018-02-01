// const sayhello = function(){
//   console.log('hello');
// }

// const sayhello = () => {
//   console.log('hello');
// };

// One line function does not need braces
// const sayhello = () => console.log('hello');

// One line returns!!
// const sayhello = () => 'hello';

// return object - > here we need ()
// const sayhello = () => {msg: 'hello'}; // -> error!!!!
// ----JavaScript's label syntax:---- !!!
// with es5 is creating this
// var sayhello = function () {
//   msg: "hello"; //obviously no return here!
// }

// if you give parentheses compailer will look at this like object!!!
// const sayhello = () => ({msg: 'hello'});

// Single param doesn't need parentheses
// const sayhello = name => console.log(`hello ${name}`);

// Multiple params need parentheses
// const sayhello = (firstname, lastName) =>
//   console.log(`hello ${firstname} ${lastName}`);
// sayhello('nemanja', 'nikolic');

const users = ['nemanja', 'pera', 'mika'];
const nameLengths = users.map(user => user.length);

console.log(nameLengths);
