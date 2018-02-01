const id = 100;

// Equal to - only value
// if (id == 100) {
//   console.log('correct');
// } else {
//   console.log('INCORRECT');
// }

// not equal to only value
// if (id != 101) {
//   console.log('correct');
// } else {
//   console.log('INCORRECT');
// }

// Equal to - value and type
// if (id === 100) {
//   console.log('correct');
// } else {
//   console.log('INCORRECT');
// }

// not equal to only value - value and type
// if (id !== 100) {
//   console.log('correct');
// } else {
//   console.log('INCORRECT');
// }

//  test if undefined
// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// greater or less than
// if (id <= 100) {
//   console.log('correct');
// } else {
//   console.log('INCORRECT');
// }

// if else
const color = 'yellow';

// if(color === 'red') {
//   console.log('color is red');
// } else if(color === 'blue') {
//   console.log('color is blue');
// } else {
//   console.log('color is not red or blue');
// }


// logical operators

const name = 'Nemanja';
const age = 30;
// AND &&
if(age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} can run!!`);
}

// ternary operator
console.log(id === 100 ? 'correct' : 'incorrect');

// without curly braces

if (id === 100)
  console.log('correct true');
else
  console.log('not correct');
