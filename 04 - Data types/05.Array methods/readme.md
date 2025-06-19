# 🧪 JavaScript – Array Methods

## 🔄 Ajouter / Retirer des éléments

### ➕ `push`, `pop`, `shift`, `unshift`

- `array.pop()` : enlève l'élément de **fin**
- `array.push(...items)` : ajoute les items à la **fin**
- `array.shift()` : enlève l'élément de **début**
- `array.unshift(...items)` : ajoute les items au **début** (plus lent, doit tout réindexer)

---

### ❌ `delete`

```js
let arr = ["I", "go", "home"];
delete arr[1]; // enlève "go"
console.log(arr[1]); // undefined
console.log(arr.length); // 3 (slot vide)
```

---

### 🧩 `splice(start[, deleteCount, elem1, ..., elemN])`

- Supprime, remplace, ou insère à un index donné.
- Très polyvalent.

```js
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // ["I", "JavaScript"]
```

Remplacement :

```js
arr.splice(0, 3, "Let's", "dance");
```

Insertion sans suppression :

```js
arr.splice(2, 0, "complex", "language");
```

Index négatifs autorisés.

---

## 🍕 `slice([start], [end])`

Retourne une **copie** d’une portion :

```js
let arr = ["t", "e", "s", "t"];
arr.slice(1, 3); // ["e", "s"]
arr.slice(-2); // ["s", "t"]
```

---

## ➕ `concat(...args)`

Concatène un tableau avec d’autres :

```js
[1, 2].concat([3, 4], [5, 6]); // [1,2,3,4,5,6]
```

Cas spécial avec objets :

```js
let arrayLike = {
  0: "something",
  1: "else",
  length: 2,
  [Symbol.isConcatSpreadable]: true,
};
[1, 2].concat(arrayLike); // [1, 2, "something", "else"]
```

---

## 🔁 Itération

### `forEach()`

```js
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index}`);
});
```

---

## 🔍 Recherche

### `indexOf`, `lastIndexOf`, `includes`

```js
let arr = [1, 0, false];
arr.indexOf(0); // 1
arr.includes(NaN); // true (attention à NaN !== NaN)
```

---

### `find`, `findIndex`, `findLastIndex`

```js
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
];

users.find((u) => u.id === 1); // { id: 1, name: "John" }
users.findIndex((u) => u.name === "Pete"); // 1
```

---

### `filter`

```js
users.filter((u) => u.id < 3); // retourne plusieurs résultats
```

---

## 🔁 Transformation

### `map`

```js
["Bilbo", "Gandalf", "Nazgul"].map((name) => name.length); // [5, 7, 6]
```

---

### `sort`

```js
[1, 2, 15].sort(); // [1, 15, 2] (tri par string)
[1, 2, 15].sort((a, b) => a - b); // [1, 2, 15]
```

---

### `reverse`

```js
[1, 2, 3].reverse(); // [3, 2, 1]
```

---

### `split`, `join`

```js
"Bilbo, Gandalf".split(", "); // ["Bilbo", "Gandalf"]
["Bilbo", "Gandalf"].join(";"); // "Bilbo;Gandalf"
```

---

### `reduce`

```js
[1, 2, 3].reduce((acc, val) => acc + val, 0); // 6
```

---

## 🧠 Résumé

| Méthode            | Effet                              | Modifie ? |
| ------------------ | ---------------------------------- | --------- |
| `push`, `pop`      | Ajouter/enlever fin                | ✅        |
| `shift`, `unshift` | Début                              | ✅        |
| `splice`           | Ajouter / supprimer / remplacer    | ✅        |
| `slice`            | Copier une portion                 | ❌        |
| `concat`           | Fusionner                          | ❌        |
| `map`              | Transformer chaque élément         | ❌        |
| `sort`, `reverse`  | Trier, inverser                    | ✅        |
| `split`/`join`     | Texte ↔ tableau                    | ❌        |
| `reduce`           | Accumuler en une seule valeur      | ❌        |
| `reduceRight`      | Même chose mais de droite à gauche | ❌        |
