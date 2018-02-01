class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `hello there ${this.firstName} ${this.lastName}`;
  }
}

// Create sub Class of person
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName); // -> Call the Parent class construtor  instead of person.call();!!
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const nemanja = new Customer('nemanja', 'nikolic', 23512141, 'standard');

console.log(nemanja);
console.log(nemanja.greeting()); // -> this gonna work
console.log(Customer.getMembershipCost());

// console.log(Person.getMembershipCost()); -> this gonna fail!!
