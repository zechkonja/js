// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById('book-list');

  // Create tr element
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;
  list.appendChild(row);
};

UI.prototype.clearFileds = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

UI.prototype.removeMessage = function () {
  document.querySelector('.msg').remove();
};

UI.prototype.showAlert = function (msg, type) {
  const bookForm = document.getElementById('book-form');
  const message = document.createElement('div');
  message.className = `msg ${type} u-full-width`;
  message.appendChild(document.createTextNode(msg));
  bookForm.prepend(message);
  setTimeout(this.removeMessage, 2000);
};

UI.prototype.removeBook = function (row) {
  row.remove();
};

// Event Listeners
// Event Listener for REMOVE
document.getElementById('book-list').addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    const row = e.target.parentElement.parentElement;
    const ui = new UI();
    ui.removeBook(row);
    ui.showAlert('Book removed!', 'success');
  }
});

// Event Listener for ADD
document.getElementById('book-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  // Instantiate UI
  const ui = new UI();

  // Validate
  if (title === '' || author === '' || isbn === '') {
    // Show alert
    ui.showAlert('Please fill text fileds', 'error');
  } else {

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Add book to list
    ui.addBookToList(book);

    // Show alert
    ui.showAlert('Successfully added Book!', 'success');
  }

  // Clear fields
  ui.clearFileds();

});
