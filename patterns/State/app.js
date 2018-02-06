const PageState = function () {
  let currentState = new HomeState(this);
  this.init = function () {
    this.change(new HomeState);
  };

  this.change = function (state) {
    currentState = state;
  };
};

// Home state
const HomeState = function () {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
  <div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
  `;
};

const AboutState = function () {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <p>This is the about page!!</p>
  `;
};

const ContactState = function () {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `;
};

// Instatiate pageState
const page = new PageState();

// Init first state
page.init();

// UI variables
const home = document.getElementById('home');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
  e.preventDefault();
  page.change(new HomeState);
  $(this).on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
});

// About
about.addEventListener('click', (e) => {
  e.preventDefault();
  page.change(new AboutState);
  $(this).on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
});

// Contact
contact.addEventListener('click', (e) => {
  e.preventDefault();
  page.change(new ContactState);
  $(this).on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
});
