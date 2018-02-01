let val;

// Number to string
val = String(555);
val = String(4 + 4);

// Boolean to string
val = String(true);

//Date to string
val = String(new Date());

// Array to string
val = String([1, 2, 3, 4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to numbers
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello'); // -> NaN -> not a number!!!!
val = Number([1, 2, 3, 4]); // -> NaN -> not a number!!!!

val = parseInt('100');
val = parseFloat('100.12');

// Output

// console.log(val);
// console.log(typeof val);
// console.log(val.length); -> only for strings
// console.log(val.toFixed(2));

// Type Coercion
const val1 = '5';
const val2 = 6;
const sum = val1 + val2;
console.log(sum); // -> 56
console.log(typeof sum); // -> string!!!
