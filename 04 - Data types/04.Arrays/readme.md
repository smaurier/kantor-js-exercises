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
([] == [][0]) == // false
  [0]; // false
0 == []; // true
```

➡️ Toujours comparer **élément par élément**.

---

## 🔹 Méthodes supplémentaires

---

### 🔹 `splice(index, count, ...items)`

**➡️ Ajoute, enlève ou remplace des éléments dans un tableau.**

```js
let arr = ["a", "b", "c", "d"];
arr.splice(1, 2, "x", "y"); // à partir de l’index 1, supprime 2 éléments et insère "x" et "y"
console.log(arr); // ["a", "x", "y", "d"]
```

- ⚠️ **Modifie le tableau d’origine**
- Retourne un tableau avec les éléments supprimés

---

### 🔹 `slice(start, end)`

**➡️ Coupe une portion du tableau (sans le modifier)**

```js
let arr = ["a", "b", "c", "d"];
let sliced = arr.slice(1, 3); // ["b", "c"]
```

- `start` inclus, `end` exclus
- Peut utiliser des **index négatifs** (`-1` = dernier)

---

### 🔹 `forEach(callback)`

**➡️ Exécute une fonction sur chaque élément du tableau**

```js
["a", "b", "c"].forEach((item, index) => {
  console.log(index, item);
});
```

- **Ne retourne rien**
- **Ne peut pas être stoppée** avec `break` ou `return`

---

### 🔹 `map(callback)`

**➡️ Transforme chaque élément et retourne un nouveau tableau**

```js
let numbers = [1, 2, 3];
let doubled = numbers.map((x) => x * 2); // [2, 4, 6]
```

- Le tableau d’origine reste inchangé
- 📌 Essentiel en **programmation fonctionnelle**

---

### 🔹 `filter(callback)`

**➡️ Garde seulement les éléments qui passent un test**

```js
let numbers = [1, 2, 3, 4];
let even = numbers.filter((x) => x % 2 === 0); // [2, 4]
```

- Retourne un **nouveau tableau**
- Ne modifie pas l’original

---

### 🔹 `find(callback)`

**➡️ Retourne le **premier élément** qui passe un test**

```js
let users = [{ name: "Bob" }, { name: "Alice" }];
let user = users.find((u) => u.name === "Alice"); // {name: "Alice"}
```

- Retourne `undefined` si aucun élément ne correspond

---

### 🔹 `findIndex(callback)`

\*\*➡️ Comme `find`, mais retourne l’**index**

```js
let arr = ["a", "b", "c"];
let index = arr.findIndex((x) => x === "b"); // 1
```

---

### 🔹 `some(callback)`

**➡️ Vérifie si au moins **un élément** passe un test**

```js
[1, 2, 3].some((x) => x > 2); // true
```

- Retourne un booléen

---

### 🔹 `every(callback)`

**➡️ Vérifie si **tous les éléments** passent un test**

```js
[1, 2, 3].every((x) => x > 0); // true
[1, 2, 3].every((x) => x > 2); // false
```

---

### 🔹 `sort(compareFn)`

\*\*➡️ Trie le tableau **(modifie l’original !)\***

```js
let arr = [1, 15, 2];
arr.sort(); // [1, 15, 2] 😱 (ordre alphabétique !)
arr.sort((a, b) => a - b); // [1, 2, 15]
```

- ⚠️ Par défaut, trie comme des **chaînes de caractères**
- Utilise une fonction de comparaison personnalisée pour les nombres

---

### 🔹 `reverse()`

**➡️ Inverse les éléments du tableau**

```js
[1, 2, 3].reverse(); // [3, 2, 1]
```

- ⚠️ Modifie l’original

---

### 🔹 `join(sep)`

**➡️ Concatène tous les éléments en une seule string**

```js
["a", "b", "c"].join("-"); // "a-b-c"
```

- Utile pour exporter ou afficher des données
