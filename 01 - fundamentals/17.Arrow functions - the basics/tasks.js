// Task 1: fonction fléchée simple
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Task 2: fonction fléchée sans paramètre
const sayHello = () => alert("Hello!");
sayHello();

// Task 3: bloc avec return
const multiply = (x, y) => {
  let result = x * y;
  return result;
};
console.log(multiply(3, 4)); // 12

// Task 4: dans un callback
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]

// Task 5: démonstration de `this`
const obj = {
  value: 42,
  regularFunc: function () {
    console.log(this.value);
  },
  arrowFunc: () => {
    console.log(this.value);
  }
};

obj.regularFunc(); // 42
obj.arrowFunc();   // undefined
