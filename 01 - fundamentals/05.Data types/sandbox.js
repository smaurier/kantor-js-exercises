// null est un objet
console.log(typeof null); // "object"
console.log(null === undefined); // false
console.log(null == undefined);  // true

// NaN est contagieux
let bad = "abc" * 3;
console.log(bad); // NaN
console.log(bad + 1); // NaN

// BigInt n'est pas un nombre et n'est pas compatible avec les autres types, pas de mixage possible
const big = 10n;
// console.log(big + 1); // ❌ TypeError : cannot mix BigInt and other types

// Symbol : Création d'objet avec une clef unique :
const id = Symbol("id");
const user = {
  name: "John",
  [id]: 123
};

console.log(user[id]); // 123
console.log(Object.keys(user)); // ["name"] → le symbol est invisible

