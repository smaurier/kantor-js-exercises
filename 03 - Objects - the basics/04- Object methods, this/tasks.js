// Définir une méthode et utiliser this
const user = {
  name: "Alice",
  sayHi() {
    console.log("Hi, I'm " + this.name);
  }
};
user.sayHi(); // Hi, I'm Alice

// Piège du contexte perdu
const admin = {
  name: "Bob",
  sayHi() {
    console.log(this.name);
  }
};
let f = admin.sayHi;
f(); // undefined (en strict mode), sinon window.name

// Arrow function ne capte pas this comme attendu
const user2 = {
  name: "Eve",
  sayHi: () => {
    console.log(this.name);
  }
};
user2.sayHi(); // undefined

// Méthode ajoutée dynamiquement
function makeUser() {
  return {
    name: "Charly",
    sayHi() {
      console.log(this.name);
    }
  };
}
let u = makeUser();
u.sayHi(); // "Charly"
