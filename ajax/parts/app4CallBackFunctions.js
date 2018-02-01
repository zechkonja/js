const posts = [
  {
    title: 'Post 1',
    body: 'This is post1',
  }, {
    title: 'Post 2',
    body: 'This is post2',
  },
];

// result Post1 Post2
// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }
//
// function getPost() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post) {
//       output += `<li>${post.title}</li>`;
//     });
//
//     document.body.innerHTML = output;
//   }, 1000);
// }
//
// createPost({title: 'Post 3', body: 'This is post3'});
// getPost();

// result Post1 Post2 Post3
// Push like second param function- getPost
function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback(); // -> run getPost after i insert post into posts array
  }, 2000);
}

function getPost() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

createPost({
  title: 'Post 3',
  body: 'This is post3',
}, getPost);
