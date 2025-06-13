// Task 1: expression simple
const sayHello = function () {
  alert("Hello!");
};
sayHello();

// Task 2: expression avec paramètre
const greet = function (name) {
  alert("Hello " + name);
};
greet("Alice");

// Task 3: fonction comme callback
function run(fn) {
  fn();
}

run(function () {
  alert("Executed from callback");
});

// Task 4: fonction conditionnelle
let showMessage;

let isAdmin = true;

if (isAdmin) {
  showMessage = function () {
    alert("Welcome, admin!");
  };
} else {
  showMessage = function () {
    alert("Welcome, guest!");
  };
}

showMessage();
