// Observer pattern ES6
// You can subscripbe functions on some event
// You can unsubscripbe functions on some event
class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now Subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((ob) => ob !== fn);
    console.log(`You are now UnSubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach((item) => {
      item.call();
    });
  }
}

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function () {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function () {
  click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function () {
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function () {
  click.fire();
});

// Click Handler
const getCurMilliseconds = function () {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurSeconds = function () {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
