// Task 1: simple function

function sayHi() {
  alert("Hello!");
}
sayHi();

// Task 2: function with parameters

function greet(name) {
  alert("Hello, " + name);
}
greet("Alice");

// Task 3: function with return

function sum(a, b) {
  return a + b;
}
let result = sum(2, 3);
alert(result); // 5

// Task 4: default parameter

function greetUser(name = "Guest") {
  alert("Welcome, " + name);
}
greetUser();
greetUser("Sylvain");

// Task 5: function expression

const logHi = function () {
  console.log("Hi there");
};
logHi();
