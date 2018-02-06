// Mediator pattern
// Objects can 'communicate' over main Object
// in this case User Object can communicate over Chatroom
const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },

  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

const Chatroom = function () {
  let users = {}; // List of users

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },

    send: function (message, from, to) {
      if (to) {
        // Single  user message
        to.receive(message, from);
      } else {
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    },
  };
};

const nemanja = new User('nemanja');
const pera = new User('pera');
const mika = new User('mika');
const zika = new User('zika');

const chatroom = new Chatroom();

chatroom.register(nemanja);
chatroom.register(pera);
chatroom.register(mika);
chatroom.register(zika);

nemanja.send('Hello Pero!!', pera);
zika.send('Ljubi braaatttt :D', nemanja);
mika.send('ajmoooo');
