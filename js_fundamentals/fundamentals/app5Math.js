const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4); // -> cesce
val = Math.floor(2.7); // -> cesce
val = Math.sqrt(64);
val = Math.abs(-32);
val = Math.pow(8, 2);
val = Math.min(2, 33, 45, 4, 3, 6, 1, -2);
val = Math.max(2, 33, 45, 4, 3, 6, 1, -2);
val = Math.random();

// vraca random brojeve do 20
val = Math.floor(Math.random() * 20 + 1); // -> cesce,

console.log(val);
