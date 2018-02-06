// MODULE PATTERN
// Basic structure
// IIFE -> immediately inoked function expression
// (function () {
//   // Declare PRIVATE variables and functions
//   return {
//     // Declare PUBLIC var and functions
//   };
// })(); // with these last parantesies function will run!

// STANDARD MODULE PATTERN
// const UICtrl = (function () {
//   let text = 'Hello World';
//
//   const changeText = function () {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   };
//
//   return {
//     callChangeText: function () {
//       changeText();
//       console.log(text);
//     },
//   };
// })();

// UICtrl.callChangeText();
// UICtrl.ChangeText();
// console.log(UICtrl.text);

// REVEALING MODULE PATTERN
// Difference from Standard module pattern
// returning object literal that directly reveals methods
// that are inside of a module
const ItemCtrl = (function () {
  let _data = [];
  function add(item) {
    _data.push(item);
    console.log('Item added...');
  }

  function get(id) {
    return _data.find(item => item.id === id);
  }

  return {
    add: add,
    get: get,
  };
})();

ItemCtrl.add({ id: 1, name: 'Nemanja' });
ItemCtrl.add({ id: 2, name: 'Pera' });
console.log(ItemCtrl.get(1));
