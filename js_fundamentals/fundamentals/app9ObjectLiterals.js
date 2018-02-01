const person = {
  firstName: 'Nemanja',
  lastName: 'Nikolic',
  age: 30,
  email: 'niknem@ok.com',
  hobbies: [
    'Music', 'Sports',
  ],
  address: {
    city: 'Beograd',
    state: 'Srbija',
  },
  getBirthYear: function () {
    return new Date().getFullYear() - this.age;
  },
};
let val = person;

// Specific value
val = person.firstName;

// val = person['firstName']; // -> not recomended!!!
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();

console.log(val);

const people = [
  {
    name: 'Pera',
    age: 32,
  }, {
    name: 'Mika',
    age: 23,
  }, {
    name: 'ZIka',
    age: 56,
  },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
