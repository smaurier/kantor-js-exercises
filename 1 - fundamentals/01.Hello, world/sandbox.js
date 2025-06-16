alert("Hello","World") // Premier paramètre seul pris en compte
alert("Hello")
alert("world")

// Cas 1 : avec template literal
alert(`Hello ${"World"}`); // "Hello World"

// Cas 2 : simulation d’un alert multiple avec \n
alert("Hello\nWorld"); // Deux lignes

// Cas 3 : passage de plusieurs arguments avec console.log
console.log("Hello", "World"); // Affiche bien les deux, contrairement à alert