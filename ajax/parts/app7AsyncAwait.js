// When we add async makes this function will RETURN PROMISE!!!!
// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });
//
//   const error = false;
//
//   if (!error) {
//     const res = await promise; // Wait until promise is RESOLVED
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong!'));
//   }
// }
//
// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers() {
  // Await response of fetch call
  // We only proceed once its resolved
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // We only proceed once second promise is resolved
  const data = await response.json();
  return data;
}

getUsers().then(users => console.log(users));
