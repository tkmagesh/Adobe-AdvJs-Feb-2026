/* Optimal Resource Utilization == compromise on privacy */

function createCounter() {
  let count = 0;
  function increment() {
    return ++count;
  }
  function decrement() {
    return --count;
  }
  let counter = { increment, decrement };
  return counter;
}

function Counter() {
  // private
  let count = 0;

  this.increment = function () {
    return ++count;
  };
  this.decrement = function () {
    return --count;
  };
}

function Counter() {
  // public (but to be treated as private by convention)
  this.__count__ = 0;
}

Counter.prototype.increment = function () {
  return ++this.__count__;
};

Counter.prototype.decrement = function () {
  return --this.__count__;
};
