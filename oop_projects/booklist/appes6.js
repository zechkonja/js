class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// Local Storage class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function (book) {
      const ui = new UI();
      ui.addBookToList(book);
    });
  }

  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

class UI {
  addBookToList(book) {
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
  }

  showAlert(msg, type) {
    const bookForm = document.getElementById('book-form');
    const message = document.createElement('div');
    message.className = `msg ${type} u-full-width`;
    message.appendChild(document.createTextNode(msg));
    bookForm.prepend(message);
    setTimeout(this.removeMessage, 2000);
  }

  removeBook(row) {
    row.remove();
  }

  clearFileds() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  removeMessage() {
    document.querySelector('.msg').remove();
  }
}

// Event Listeners

// DOM Load event
document.addEventListener('DOMContentLoaded', Store.displayBooks());

// Event Listener for REMOVE
document.getElementById('book-list').addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    const row = e.target.parentElement.parentElement;
    const ui = new UI();
    ui.removeBook(row);

    // Remove from LS
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

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

    //Add to Local Storage
    Store.addBook(book);

    // Show alert
    ui.showAlert('Successfully added Book!', 'success');
  }

  // Clear fields
  ui.clearFileds();

});
