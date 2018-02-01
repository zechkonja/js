const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },

  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

const pera = Object.create(personPrototypes);
pera.firstName = 'pera';
pera.lastName = 'peric';
pera.age = 40;

pera.getsMarried('Karanovic');

console.log(pera);

const nemanja = Object.create(personPrototypes, {
  firstName: {
    value: 'nemanja',
  },
  lastName: {
    value: 'nikolic',
  },
  age: {
    value: 36,
  },
});

console.log(nemanja);

console.log(nemanja.greeting());
