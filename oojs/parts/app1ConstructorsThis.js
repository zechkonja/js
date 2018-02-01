// Person constructor
function Person(name, dob) {
  // console.log(this);  -> context of Person object
  this.name = name;

  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const dif = Date.now() - this.birthday.getTime();
    const ageDate = new Date(dif);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// console.log(this);  -> windows object

// const brad = new Person('brad', 30);
// const nemanja = new Person('Nemanja', 23);
// const pera = new Person('pera');
// console.log(nemanja);

const brad = new Person('brad', '9-10-1987');
console.log(brad);
