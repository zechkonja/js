import {http} from './http';
import {ui} from './ui';

// Get posts on dom load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

// Remove alert on click
document.querySelector('.postsContainer').addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('remove-alert')) {
    ui.clearAlert();
  }
});

// Listen for cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit);

// Get posts
function getPosts() {
  http.get('http://localhost:3000/posts').then(data => ui.showPosts(data)).catch(err => console.log(err));
}

// Submit post
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;

  if (title === '' || body === '') {
    ui.showAlert('Please fill in all fields', 'alert alert-danger');
    return false;
  }

  const data = {
    title,
    body
  };
  // Check for ID
  if (id === '') {
    // Create post
    http.post('http://localhost:3000/posts', data).then(data => {
      ui.showAlert('Post added', 'alert alert-success');
      ui.clearFields();
      getPosts();
    }).catch(err => console.log(err));
  } else {
    // Update post
    http.put(`http://localhost:3000/posts/${id}`, data).then(data => {
      ui.showAlert('Post updated', 'alert alert-success');
      ui.changeFormState('add');
      ui.clearFields();
      getPosts();
    }).catch(err => console.log(err));
  }
}

// Enable edit state
function enableEdit(e) {
  e.preventDefault();

  if (e.target.parentElement.classList.contains('edit')) {
    const id = e.target.parentElement.dataset.id;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body
    };

    ui.fillForm(data);
  }
}

// Cancel edit state
function cancelEdit(e) {
  e.preventDefault();
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }

}
