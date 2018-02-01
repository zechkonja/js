// prototype

// Object.prototype
// Person.prototype

function Person(firstname, lastName, dob) {
  this.firstname = firstname;
  this.lastName = lastName;
  this.birthday = new Date(dob);

  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

// Calculate Age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// get full name
Person.prototype.getfullName = function () {
  return `${this.firstname} ${this.lastName}`;
};

// Get Married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

const nemanja = new Person('Nemanja', 'Nikolic', '9-30-1987');
const pera = new Person('pera', 'peric', '1-15-1984');

console.log(nemanja);
pera.getsMarried('Miric');
console.log(pera.getfullName());

console.log(nemanja.hasOwnProperty('firstname'));
console.log(nemanja.hasOwnProperty('getfullName'));
