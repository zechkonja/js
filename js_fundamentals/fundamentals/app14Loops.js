// for loop

// for(let i = 0; i < 10; i++) {
//   if(i === 2) {
//     console.log('2 is my favorite number');
//     continue;
//   }
//
//   if(i === 5) {
//     console.log('break');
//     break;
//   }
//
//   console.log('Number '+ i);
// }

// while loop

// let i = 0;
//
// while (i < 10) {
//   console.log('Number ' + i);
//   i++;
// }

// do while

// let i = 100;
// do {
//   console.log('Number ' + i);
//   i++;
// } while (i < 10);

// Loop through array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(car, index, cars) {
//   console.log(car);
//   console.log(index);
//   console.log(cars);
// });

// MAP
// const users = [
//   {
//     id: 1,
//     name: 'Nemanja',
//   }, {
//     id: 2,
//     name: 'pera',
//   }, {
//     id: 3,
//     name: 'Mika',
//   },
// ];
//
// const ids = users.map(function(user){
//   return user.id;
// });
//
// console.log(ids);

// FOR IN LOOP
const user = {
  firstname: 'Nemanja',
  lastname: 'Nikolic',
  age: 40,
};

for (let key in user) {
  console.log(`key-${key} and value-${user[key]}`);
}
