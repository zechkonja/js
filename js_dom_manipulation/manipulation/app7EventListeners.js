// Events

// document.querySelector('.clear-tasks')
//   .addEventListener('click',
//     function (e) {
//       e.preventDefault();
//       console.log('hello from event');
//     }
//   );

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  // console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.className;
  val = e.target.classList;

  // e.target.innerText = 'Hello';
  // event type
  val = e.type;

  // timetamp
  val = e.timeStamp;

  //coordinates event relative to the window
  val = e.clientY;
  val = e.clientX;

  //coordinates event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);

}
