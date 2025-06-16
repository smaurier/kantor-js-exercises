// Two functions, one object

let shared = {};

function A() {
  return shared;
}
function B() {
  return shared;
}

let a = new A();
let b = new B();

alert(a == b); // true

// Create new calculator

function Calculator() {
    this.read = function() {
        this.a = +prompt("Entre le premier nombre", 0);
        this.b = +prompt("Entre le second nombre", 0);
    }   

    this.sum = function() {
        return this.a + this.b;
    }

    this.mul = function() {
        return this.a * this.b;
    }

}

//Create new Accumulator

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt("Entrez un nombre", 0);
    }
}
