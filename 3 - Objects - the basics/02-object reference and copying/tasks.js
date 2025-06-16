// Task 1: Copie par référence
let user = { name: "John", age: 30 };
let admin = user;
admin.name = "Pete";
console.log(user.name); // "Pete"

// Task 2: Shallow copy avec for...in
let user2 = { name: "John", age: 30 };
let clone = {};
for (let key in user2) {
  clone[key] = user2[key];
}
clone.name = "Paul";
console.log(user2.name); // "John"
console.log(clone.name); // "Paul"

// Task 3: Shallow copy avec Object.assign
let salaries = { John: 100, Ann: 160, Pete: 130 };
let salariesCopy = Object.assign({}, salaries);
salariesCopy.Ann = 999;
console.log(salaries.Ann); // 160

// Task 4: Problème de shallow copy avec objets imbriqués
let user3 = { name: "John", sizes: { height: 180, width: 50 } };
let shallow = Object.assign({}, user3);
shallow.sizes.height = 190;
console.log(user3.sizes.height); // 190 (modifié aussi dans l'original)

// Task 5: Deep copy avec structuredClone
let user4 = { name: "John", sizes: { height: 180, width: 50 } };
let deep = structuredClone(user4);
deep.sizes.height = 200;
console.log(user4.sizes.height); // 180 (pas modifié dans l'original)
