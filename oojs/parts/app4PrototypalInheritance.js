// Person constructor

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person('pera', 'peric');
console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName); // -> prosledi objektu vec postavljene property.je
  this.phone = phone;
  this.membership = membership;
}

// Na ovaj nacin nasledjujemo objekat, njegove metode!
// INHERIT Person prototype methods !!!!!!!  prvi korak
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer() !!!!!!! drugi korak
Customer.prototype.constructor = Customer;

// Create a customer
const cust1 = new Customer('Tom', 'Smith', '12345', 'standard');
console.log(cust1);

// Customer greeting
// Greeting -> metode od nasledjenog objekta mogu da se pregaze!
Customer.prototype.greeting = function () {
  return `Customer ${this.firstName} ${this.lastName}`;
};

console.log(cust1.greeting());
