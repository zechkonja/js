class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `hello there ${this.firstName} ${this.lastName}`;
  };

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  getsMarried(newlastname) {
    this.lastName = newlastname;
  };

  // create static method
  static addNumbers(x, y) {
    return x + y;
  }
}

const pera = new Person('pera', 'peric', '11-13-1987');

pera.getsMarried('Zezic');
console.log(pera);
console.log(pera.greeting());
console.log(pera.calculateAge());

// call static method!!! you don't need to instatiate object
console.log(Person.addNumbers(1, 2));
