let map = new Map();

console.log(map)

map.set('name', 'Sylvain');
console.log(map)
console.log(map.get('name')); // Sylvain
console.log(map.has('name')); // true
console.log(map.set('age', 37)); // Map { 'name' => 'Sylvain', 'age' => 37 }
console.log(map)
map.set("job", "developer");
console.log(map)
console.log(map.has("nationality")); // false
console.log(map)
console.log(map.delete("nationality")); // false
console.log(map.delete("job")); // true
console.log(map)
console.log(map.size); // 2
console.log(map)
map.clear();
console.log(map)

// Objet comme clé : Impossible de faire ça avec un objet littéral
let obj = { name: "Sylvain", surname: "Maurier" };
map.set(obj, "developer");
console.log(map.get(obj)); // developer

map.set(NaN, NaN)
map.get(NaN) === NaN; // Ici NaN est considéré comme une clé valide !!! Waouh !

map.clear();

//chainage de set
map .set("vegetables", ["carrot", "potato", "onion"])
    .set("fruits", ["apple", "banana", "orange"])
    .set("dairy", ["milk", "cheese", "yogurt"]);

console.log(map)

for(let [key, value] of map) {
    console.log(key, value);
}

map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Convertir un objet en map :
/*--
Interet du map
- clé non string : le type d'une clé dans une map peut être n'importe quel type, objet, fonction, NaN, undefined, etc.
- ordre d'insertion : les clés dans une map sont ordonnées selon l'ordre d'insertion, contrairement aux objets qui n'ont pas d'ordre garanti.
- Méthodes : les maps ont des méthodes spécifiques comme `set`, `get`, `has`, `delete`, et `clear` qui facilitent la manipulation des données.
- itérabilité : les maps sont itérables, pas besoin d'object.entries() pour itérer sur les paires clé-valeur.
- conversion facile : on peut facilement convertir un objet en map et vice versa.
- performance : les maps sont généralement plus performantes pour les opérations de recherche, d'insertion et de suppression par rapport aux objets, surtout pour les grandes collections de données.
--*/
let objToConvert = {
  name: "Sylvain",
  age: 37,
  job: "developer"
};

let convertedMap = new Map(Object.entries(objToConvert));
console.log(convertedMap); // Map { 'name' => 'Sylvain', 'age' => 37, 'job' => 'developer' }

//Convertir une map en objet
let mapToConvert = new Map([
  ["name", "Sylvain"],
  ["age", 37],
  ["job", "developer"]
]);

let convertedObject = Object.fromEntries(mapToConvert);
console.log(convertedObject); // { name: 'Sylvain', age: 37, job: 'developer' }

// Set
let set = new Set();
console.log(set);

set.add("apple").add("banana").add("orange"); // chainage possible

console.log(set); // Set { 'apple', 'banana', 'orange' }
console.log(set.has("apple")); // true

set.delete("banana");
console.log(set); // Set { 'apple', 'orange' }
console.log(set.size); // 2
set.clear();
console.log(set); // Set {}
console.log("-------------------");

// Exemples pratiques d'utilisation des méthodes d'itération sur un Set
let fruitSet = new Set(['apple', 'banana', 'orange', 'apple']); // 'apple' en double sera ignoré

console.log('=== Utilisation de set.entries() ===');
for (const [key, value] of fruitSet.entries()) {
  console.log(key, value); // key et value sont identiques dans un Set
}

console.log('\n=== Utilisation de set.values() ===');
for (const value of fruitSet.values()) {
  console.log(value);
}

console.log('\n=== Utilisation de set.keys() ===');
for (const key of fruitSet.keys()) {
  console.log(key); // Identique à values() pour un Set
}

console.log('\n=== Comparaison: itération directe du Set ===');
for (const item of fruitSet) {
  console.log(item); // Équivalent à set.values()
}

console.log('\n=== Utilisation avec l\'itérateur directement ===');
const entriesIterator = fruitSet.entries();
console.log('Premier élément:', entriesIterator.next().value); // ['apple', 'apple']
console.log('Deuxième élément:', entriesIterator.next().value); // ['banana', 'banana']
