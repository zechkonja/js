const http = new easyHTTP;

// get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (error, posts) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(posts);
//   }
// });

// get single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (error, posts) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(posts);
//   }
// });

// Create data
const data = {
  title: 'custom post',
  body: 'this is a custom post',
};

// Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (error, post) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });

// Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(error, post) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });

// Remove Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
