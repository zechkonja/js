document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('/data/data.txt')
    .then(response =>response.text())
    .then(data => {
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

// Get local json data
function getJson() {
  fetch('/data/posts.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(function (post) {
        output += `
          <h5>${post.title}</h5>
          <p>${post.body}</p>
        `;
      });

      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

// Get external json data
function getExternal() {
  fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
      let output = '';
      data.forEach(function (user) {
        output += `
          <li>${user.login}</li>
        `;
      });

      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}
