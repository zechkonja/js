const posts = [
  {
    title: 'Post 1',
    body: 'This is post1',
  }, {
    title: 'Post 2',
    body: 'This is post2',
  },
];

// result Post1 Post2 Post3
function createPost(post) {

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);
      let error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong!');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'Post 3', body: 'This is post3' })
.then(getPosts)
.catch(function (err) {
  console.log(err);
});
