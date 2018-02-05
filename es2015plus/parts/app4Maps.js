// Maps  = key value pairs - can use ANY type as a key or a value
const map1 = new Map();

// Set Keys
const key1 = 'some string';
const key2 = {};
const key3 = function () {};

// set map values by key
map1.set(key1, 'value of key 1');
map1.set(key2, 'value of key 2');
map1.set(key3, 'value of key 3');

// get values by key
// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));

// Count values
// console.log(map1.size);

// ITTERATING MAPS

// Loop using for...of to get key and values
// for (let [key, value] of map1) {
//   console.log(`${key} = ${value}`);
// }

// Itterate keys only
// for (let key of map1.keys()) {
//   console.log(key);
// }

// Itterate values only
// for (let value of map1.values()) {
//   console.log(value);
// }

// map1.forEach((value, key) => {
//   console.log(`${key} = ${value}`);
// });

// CONVERT TO ARRAY

// Create an array of to the key value pairs
// const keyValArr = Array.from(map1);
// console.log(keyValArr);

// Create an array of to the values
// const valArr = Array.from(map1.values());
// console.log(valArr);

// Create an array of to the keys
const keyArr = Array.from(map1.keys());
console.log(keyArr);
