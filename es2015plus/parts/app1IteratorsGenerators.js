// Iterator example
// function nameIterator(names) {
//   let nextIndex = 0;
//
//   return {
//     next: function () {
//       return nextIndex < names.length ?
//       { value: names[nextIndex++], done: false } :
//       { done: true };
//     },
//   };
// }
//
//
// // Create an array of names
// const namesArr = ['nemanja', 'pera', 'mika'];
//
// // Init iterator and pass in the names array
// const names = nameIterator(namesArr);
//
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());

// Generator Example -> * this tells js this function is generator
// function* sayNames(){
//   yield 'Jack';
//   yield 'nemanja';
//   yield 'pera';
// }
//
//
// const name = sayNames();
//
//
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());
// console.log(name.next());


// ID Creator
function* createIds() {
  let index = 0;

  while(true){
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
