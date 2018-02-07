class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = 'add';
  }

  // Show all posts
  showPosts(posts) {
    let output = '';

    posts.forEach((post) => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="card-title">${post.title}</h4>
            <p class="card-text">${post.body}</p>
            <a href="#" class="edit card-link" data-id="${post.id}">
              <i class="fa fa-pencil"></i>
            </a>
            <a href="#" class="delete card-link" data-id="${post.id}">
              <i class="fa fa-remove"></i>
            </a>
          </div>
        </div>
      `;
    });

    this.post.innerHTML = output;
  }

  // Show alert
  showAlert(msg, className) {
    this.clearAlert();

    // Create div
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(msg));
    const span = document.createElement('span');
    span.className = 'pull-right';
    span.innerHTML = '<i class="remove-alert fa fa-remove"></i>';
    div.appendChild(span);
    const container = document.querySelector('.postsContainer');
    container.insertBefore(div, this.post);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }


  }

  // Clear all fileds
  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  // Clear ID hidden value
  clearIdInput() {
    this.idInput.value = '';
  }

  // Fill form to edit
  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState('edit');
  }

  // Change form state
  changeFormState(type) {
    if (type === 'edit') {
      this.postSubmit.textContent = 'Update post';
      this.postSubmit.className = 'post-submit btn btn-warning btn-block';

      // Create cancel button
      const cancelBtn = document.createElement('button');
      cancelBtn.className = 'post-cancel btn btn-light btn-block';
      cancelBtn.appendChild(document.createTextNode('Cancel edit'));

      const cardForm = document.querySelector('.card-form');
      const fromEnd = document.querySelector('.form-end');

      cardForm.insertBefore(cancelBtn, fromEnd);
    } else {
      this.postSubmit.textContent = 'Post it';
      this.postSubmit.className = 'post-submit btn btn-primary btn-block';
      // Remove cancle button if is there
      if (document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }

      this.clearIdInput();

      this.clearFields();

    }
  }

}

export const ui = new UI();
