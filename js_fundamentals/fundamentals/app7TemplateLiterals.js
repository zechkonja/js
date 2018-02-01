const name = 'nemanja';
const age = 29;
const job = 'web developer';
const city = 'Beograd';

let html;

// wihout template strings
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' +
           '<li>Name: ' + name + '</li>' +
           '<li>Age: ' + age + '</li>' +
           '<li>Job: ' + job + '</li>' +
           '<li>City: ' + city + '</li>' +
        '</ul>';

function hello() {
  return 'hello';
}

// with template strings (es6)
html = `
<ul>
  <li>Name ${name}</li>
  <li>Age ${age}</li>
  <li>Job ${job}</li>
  <li>City ${city}</li>
  <li>${2 + 2}</li>
  <li>${hello()}</li>
  <li>${age > 30
  ? 'Over 30'
  : 'Less then 30'}</li>
</ul>
`;

document.body.innerHTML = html;
