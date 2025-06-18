// Test 1 - Accès à la dernière lettre
const greeting = "Bonjour";
console.log(greeting.at(-1)); // "r"

// Test 2 - Immutabilité
let test = "Salut";
test[0] = "X";
console.log(test); // "Salut" (rien ne change)

// Test 3 - includes vs indexOf
console.log("javascript".includes("script")); // true
console.log("javascript".indexOf("script") !== -1); // true

// Test 4 - Comparaison
console.log("Z" > "a"); // false (90 < 97)
console.log("école" > "zèbre"); // false

// Test 5 - Tris personnalisés
console.log("école".localeCompare("zèbre", 'fr')); // -1

// Test 6 - Extraire une sous-string
const phrase = "Bonjour tout le monde";
console.log(phrase.slice(8, 12)); // "tout"
console.log(phrase.substring(12, 8)); // "tout"

// Test 7 - replace manuelle
const msg = "il fait beau";
const fixed = msg[0].toUpperCase() + msg.slice(1).toLowerCase();
console.log(fixed); // "Il fait beau"
