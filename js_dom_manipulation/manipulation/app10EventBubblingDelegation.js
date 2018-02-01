// EVENT BUBBLING -> fires all events from child where
// event if added to last added parent event

// document.querySelector('.card-title').addEventListener('click',
// function(){
//   console.log('card title');
// });
//
// document.querySelector('.card-content').addEventListener('click',
// function(){
//   console.log('card content');
// });
//
// document.querySelector('.card').addEventListener('click',
// function(){
//   console.log('card');
// });
//
// document.querySelector('.col').addEventListener('click',
// function(){
//   console.log('col');
// });

// -> when i click on .card-title
// -> result of above -> card title, card content, card, col

// EVENT DELEGATION -> add listener on parent of what
// are looking for, and put condition with name of target

// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log(e.target);
    e.target.parentElement.parentElement.remove();
  }
}
