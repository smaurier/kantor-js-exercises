# 📘 Résumé - Les Tableaux en JavaScript

### 🔹 Pourquoi utiliser les tableaux ?

Les objets (`{}`) stockent des paires clé-valeur. Mais quand on veut une collection **ordonnée** (1er, 2e, 3e…), comme une liste d’utilisateurs ou d’éléments HTML, **le tableau (`Array`) est la bonne structure**.

---

### 🔹 Déclaration

```js
let arr = new Array(); // Rare
let arr = []; // Fréquent
let fruits = ["Apple", "Orange", "Plum"];
```

---

### 🔹 Types mixtes

```js
let arr = [
  "Apple",
  { name: "John" },
  true,
  function () {
    alert("hello");
  },
];
arr[1].name; // "John"
arr[3](); // "hello"
```

---

### 🔹 Accès et modification

```js
fruits[0]; // "Apple"
fruits[2] = "Pear";
fruits[3] = "Lemon";
fruits.length; // 4
```

---

### 🔹 Caractéristiques

- ✅ Virgule terminale autorisée.
- ✅ Accès au dernier élément :

```js
fruits[fruits.length - 1];
fruits.at(-1); // ES2022
```

---

### 🔹 Méthodes de manipulation

#### Fin :

- `push(...items)`
- `pop()`

#### Début :

- `unshift(...items)`
- `shift()`

---

### 🔹 Performance

- ✅ `push`/`pop` rapides
- ❌ `shift`/`unshift` lents (réindexation)

---

### 🔹 Tableaux = objets optimisés

Éviter `arr.test = 5` ou `arr[9999] = ...`

---

### 🔹 Boucles

```js
for (let i = 0; i < arr.length; i++) { ... }
for (let item of arr) { ... }   // moderne
for (let key in arr) { ... }    // ❌ à éviter
```

---

### 🔹 Propriété `.length`

- Modifiable : tronque ou étend

```js
arr.length = 2;
arr.length = 0; // vide
```

---

### 🔹 new Array(x)

```js
new Array(2); // [empty × 2]
```

---

### 🔹 Tableaux multidimensionnels

```js
let matrix = [
  [1, 2],
  [3, 4],
];
matrix[1][0]; // 3
```

---

### 🔹 Conversion en string

```js
String([1, 2]); // "1,2"
[1] + 1; // "11"
```

---

### 🔹 Comparaison

```js
([] ==
  [][0]) == // false
  [0]; // false
0 == []; // true
```

➡️ Toujours comparer **élément par élément**.

---

### 🔹 Méthodes supplémentaires

- `splice(index, count, ...items)`
- `slice(start, end)`
- `forEach`, `map`, `filter`, `find`, `findIndex`, `some`, `every`
- `sort()`, `reverse()`, `join(sep)`
