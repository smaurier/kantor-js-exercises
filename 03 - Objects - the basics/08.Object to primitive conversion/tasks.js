// 🔁 Exercices de conversion d'objet en primitive

// 1. Crée un objet user qui retourne "Salut" en string et 100 en contexte number
let user = {
  name: "Sylvain",
  money: 100,
  toString() {
    return "Salut";
  },
  valueOf() {
    return this.money;
  }
};

console.log(String(user)); // "Salut"
console.log(+user);        // 100

// 2. Crée un objet avec Symbol.toPrimitive pour retourner dynamiquement
let product = {
  name: "Mac",
  price: 1999,
  [Symbol.toPrimitive](hint) {
    if (hint === "string") return `Produit: ${this.name}`;
    return this.price;
  }
};

console.log(String(product)); // "Produit: Mac"
console.log(product + 1);     // 2000