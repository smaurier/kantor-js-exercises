# Objects: The Basics

## Définition et création

- Un **objet** est une collection de propriétés sous forme clé/valeur (`key: value`).
- Deux syntaxes principales :
  - **Objet littéral** : `let user = {}` (préférée, plus concise)
  - **Constructeur** : `let user = new Object()`

## Ajout, accès et suppression de propriétés

- Ajout/accès par point : `user.name = "John";`
- Ajout/accès par crochets (utile pour noms multi-mots ou dynamiques) :  
  `user["likes birds"] = true;`
- Suppression : `delete user.name;`
- Les noms multi-mots doivent être entre guillemets.
- **Trailing comma** : on termine souvent chaque ligne par une virgule, même la dernière, pour simplifier l’ajout ou la suppression de propriétés.

## Accès dynamique

- On peut utiliser une variable comme nom de propriété :

```js
let key = "likes birds";
user[key] = true;
```

- On peut aussi créer dynamiquement une clé lors de la création de l'objet :

```js
let fruit = prompt("Which fruit to buy?", "apple");
let bag = { [fruit]: 5 };
// bag.apple = 5 si fruit == "apple"
```

## Raccourcis pour propriétés

- Si le nom de la propriété et celui de la variable sont identiques, on peut raccourcir :

```js
function makeUser(name, age) {
  return { name, age };
}
```

## Tester l’existence d’une propriété

- Si la propriété n’existe pas, `user.someKey` renvoie `undefined`.
- Pour distinguer une propriété existante valant `undefined` d’une propriété absente, utiliser l’opérateur `in` :

```js
"age" in user; // true/false
```

## Boucler sur les propriétés

- Pour parcourir toutes les clés d’un objet :

```js
for (let key in user) {
  // key : nom de la propriété
  // user[key] : valeur correspondante
}
```

## Exemples de tâches typiques (corrigées)

- **Ajouter, modifier, supprimer :**

```js
const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
```

- **Tester si objet vide :**

```js
function isEmpty(obj) {
  for (let key in obj) return false;
  return true;
}
```

- **Sommer les propriétés numériques :**

```js
let salaries = { John: 100, Ann: 160, Pete: 130 };
let sum = 0;
for (let name in salaries) {
  sum += salaries[name];
}
```

- **Multiplier les propriétés numériques par 2 :**

```js
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}
```
