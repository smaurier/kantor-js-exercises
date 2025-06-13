// Task 1: tester typeof
console.log(typeof null);        // "object"
console.log(typeof NaN);         // "number"
console.log(typeof function () { }); // "function"

// Task 2: vérifier les pièges de comparaison
console.log([] == false); // true
console.log("" == 0);     // true
console.log([0] == 0);    // true

// Task 3: tester NaN
console.log(NaN === NaN);            // false
console.log(Number.isNaN(NaN));      // true

// Task 4: mauvais appel constructeur
function Person(name) {
  this.name = name;
}

const p = Person("Bob"); // ❌ ne pas oublier `new`
console.log(p);          // undefined
console.log(name);       // "Bob" (global si pas en strict mode)
