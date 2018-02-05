// SYMBOLS ARE ALWAYS UNIQUE!!!!
// Create a Sybmol
// Primitive data type!!
const sym1 = Symbol();
const sym2 = Symbol('sym2');

// Symbols are values that programs can create and use as property keys
// without risking name collisions. !!!!

// console.log(sym1);
// console.log(sym2);
// console.log(typeof sym1);
//
// console.log(Symbol('123') === Symbol('123'));
// console.log(`hello ${sym1.toString()}`);

// Unique Object Keys

const key1 = Symbol();
const key2 = Symbol('sym2');

const myObj = {

};

// myObj.key1 = 'Prop1'; -> normal property
myObj[key1] = 'Prop1'; // -> actual variable(Symbol)
myObj[key2] = 'Prop2';

myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';

console.log(myObj);

// Symbols are not enumerable in for...in
for (let i in myObj)
{
  console.log(`${i} - key, ${myObj[i]} - value`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({ key: 'Prop' }));
console.log(JSON.stringify({ [Symbol('sym1')]: 'Prop' })); // -> !!!!
