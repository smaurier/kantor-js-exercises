# 📘 Résumé - Les Tableaux en JavaScript (Version enrichie)

### 🔹 Pourquoi utiliser les tableaux ?

Les objets (`{}`) stockent des paires clé-valeur. Mais quand on veut une collection **ordonnée** (1er, 2e, 3e…), comme une liste d’utilisateurs ou d’éléments HTML, **le tableau (`Array`) est la bonne structure**.

---

### 🔹 Déclaration et types

```js
let arr = new Array(); // Rare
let arr = []; // Fréquent
let fruits = ["Apple", "Orange", "Plum"];
```

Les tableaux peuvent contenir des types mixtes :

```js
let arr = [
  "Apple",
  { name: "John" },
  true,
  function () {
    alert("hello");
  },
];
```

---

### 🔹 Accès, modification et longueur

```js
fruits[0]; // "Apple"
fruits[2] = "Pear";
fruits.push("Lemon");
fruits.length; // 4
fruits.at(-1); // Dernier élément
```

---

### 🔹 Copie par référence

```js
let fruits = ["Apple", "Pear"];
let cart = fruits;
cart.push("Banana");
console.log(fruits.length); // 3, car cart et fruits pointent sur le même tableau
```

---

### 🔹 Méthodes de manipulation

#### Fin :

- `push(...items)`
- `pop()`

#### Début :

- `unshift(...items)`
- `shift()`

#### Spécial :

- `splice(index, deleteCount, ...items)` : modifie l'array (ajoute/remplace/supprime)
- `slice(start, end)` : copie une portion (immuable)
- `concat(arr1, arr2)` : concatène (immuable)

#### Attention à `delete` :

```js
let arr = ["a", "b", "c"];
delete arr[1]; // laisse un "trou"
console.log(arr); // ["a", <empty>, "c"]
```

---

### 🔹 Itérations

```js
for (let i = 0; i < arr.length; i++) {}
for (let item of arr) {
}
// ❌ for..in à éviter : parcourt aussi les propriétés
```

---

### 🔹 Méthodes d’itération fonctionnelle

- `forEach(fn)` : exécute une fonction pour chaque élément
- `map(fn)` : transforme les éléments (immuable)
- `filter(fn)` : filtre les éléments (immuable)
- `find(fn)` : retourne le 1er élément satisfaisant
- `findIndex(fn)` : retourne l’index du 1er élément
- `some(fn)` / `every(fn)` : au moins un / tous les éléments valident la condition
- `reduce(fn, init)` / `reduceRight(fn, init)` : accumulation
- `sort(fn)` / `reverse()` : trie / inverse (mutables)
- `join(sep)` : crée une string

---

### 🔹 Comparaison

```js
[] == []; // false
0 == []; // true
```

➡️ Comparer **élément par élément**.

---

### 🔹 Vérification d’un tableau

```js
Array.isArray([]); // true
Array.isArray({}); // false
```

---

### 🔹 Méthodes mutables vs immutables

| Méthode        | Modifie l'array ?            |
| -------------- | ---------------------------- |
| push, pop      | ✅ Oui                       |
| shift, unshift | ✅ Oui                       |
| splice, sort   | ✅ Oui                       |
| reverse        | ✅ Oui                       |
| slice, map     | ❌ Non                       |
| filter, concat | ❌ Non                       |
| join           | ❌ Non (retourne une string) |

---

### 🔹 Conversion

```js
String([1, 2]); // "1,2"
[1] + 1; // "11"
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

### 🔹 Résumé des pièges

- `new Array(2)` → [empty × 2]
- `delete arr[i]` laisse un trou
- `==` entre tableaux → false
- `sort()` trie par défaut comme des strings

---

### 🔹 À retenir

- Utiliser `Array.isArray()` pour tester un array
- Préférer les méthodes **immutables** pour éviter les effets de bord
- Bien connaître `splice`, `slice`, `reduce`, `map`, `filter` : essentiels en JS moderne

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
