const firstName = 'Nemanja';
const lastName = 'Nikolic';
const age = 30;
const str = 'hello there my name is';
const tags = 'web design, web development, web programming';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;

// Append
val = 'Pera ';
val += 'Peric';

val = 'Cao, moje ime je '
    + firstName +
    ' i ja sam mator ko biblija znaci preko '
    + age + ' godina';

// Escaping
val = 'Tha\'s aswesome, can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

val = firstName[0].concat(lastName[0]); // NN short elegant way

// indexOf() -> Jako jako vazna funkcija!!!
val = firstName.indexOf('n');
val = firstName.lastIndexOf('n');

// charAt()
val = firstName.charAt('2');

// get last charachter
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 5);
val = firstName.slice(-1); // -> get last charachter

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('hello', 'hi');

// includes()
val = str.includes('there');

console.log(val);
