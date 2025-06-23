# 🗺️ `Map` : une structure clé-valeur avancée

### Pourquoi `Map` ?

Jusqu’ici, on avait :

* `Object` → pour stocker des données **par clé**
* `Array` → pour stocker des données **ordonnées**

Mais dans les cas réels, ça ne suffit pas. Exemple : si tu veux une clé qui soit un **objet**, `Object` casse tout (il convertit en string). C’est là que `Map` intervient.

---

### 🧱 Création et méthodes essentielles

```js
let map = new Map();
```

Méthodes disponibles :

* `map.set(key, value)` → ajoute une paire clé-valeur
* `map.get(key)` → récupère la valeur associée à une clé
* `map.has(key)` → vérifie si une clé existe (`true` ou `false`)
* `map.delete(key)` → supprime une paire par sa clé
* `map.clear()` → supprime toutes les paires
* `map.size` → donne le nombre d’éléments

---

### 🧪 Exemple : différences clés entre Map et Object

```js
let map = new Map();
map.set('1', 'str1');     // string
map.set(1, 'num1');       // number
map.set(true, 'bool1');   // boolean

alert(map.get(1));     // 'num1'
alert(map.get('1'));   // 'str1'
alert(map.size);       // 3
```

👉 **Contrairement aux objets**, `Map` ne convertit **pas** les clés en string. Chaque type est conservé tel quel.

---

### ⚠️ Mauvaise pratique : `map[key]`

```js
map['key'] = 'value'; // fonctionne mais évite !
```

Tu perds tous les avantages de `Map`. Tu reviens aux limites de `Object` (clés uniquement en string ou symbol).

---

### 🔐 Objets comme clés

```js
let john = { name: "John" };
let visits = new Map();

visits.set(john, 123);
alert(visits.get(john)); // 123
```

✅ Possible avec `Map`.
❌ Impossible avec `Object` :

```js
let visits = {};
let ben = { name: "Ben" };
let john = { name: "John" };

visits[ben] = 234;
visits[john] = 123;

alert(visits["[object Object]"]); // 123 → perte d'information
```

---

### 🧪 Comparaison de clés

`Map` utilise l’algo `SameValueZero` :

* Similaire à `===` strict
* Mais avec une exception : `NaN === NaN` est `true` (contrairement à `===`)

Donc tu peux utiliser `NaN` comme clé.

---

### 🔗 Chaînage

Comme `set()` renvoie le `map`, on peut chaîner :

```js
map.set('1', 'str1')
   .set(1, 'num1')
   .set(true, 'bool1');
```

---

### 🔁 Parcourir une `Map`

```js
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50]
]);
```

* Clés : `map.keys()`
* Valeurs : `map.values()`
* Entrées \[clé, valeur] : `map.entries()`

```js
for (let key of recipeMap.keys()) alert(key);
for (let value of recipeMap.values()) alert(value);
for (let [key, value] of recipeMap.entries()) alert(`${key}: ${value}`);
```

➡️ **Ordre d’insertion** conservé (contrairement à `Object`)

---

### 📍 `forEach` avec `Map`

```js
recipeMap.forEach((value, key) => {
  alert(`${key}: ${value}`);
});
```

---

### 🔄 Convertir `Object` ⇄ `Map`

#### ➡️ `Object` → `Map`

```js
let obj = { name: "John", age: 30 };
let map = new Map(Object.entries(obj));

alert(map.get('name')); // John
```

#### ➡️ `Map` → `Object`

```js
let map = new Map([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

let obj = Object.fromEntries(map);
alert(obj.orange); // 2
```

---

## ✅ `Set` : une collection sans doublons

### À quoi sert `Set` ?

Un `Set` est une **collection de valeurs uniques**, sans clé. C’est l’équivalent d’un tableau **sans doublons automatiques**.

```js
let set = new Set();
```

Méthodes :

* `set.add(value)` → ajoute une valeur (si pas déjà présente)
* `set.has(value)` → `true` ou `false`
* `set.delete(value)`
* `set.clear()`
* `set.size`

---

### 🧪 Exemple

```js
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

let set = new Set();
set.add(john);
set.add(pete);
set.add(mary);
set.add(john); // ignoré
set.add(mary); // ignoré

alert(set.size); // 3
```

➡️ Idéal pour compter des visiteurs uniques.

---

### 🔁 Parcourir un `Set`

```js
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

set.forEach((value, valueAgain, set) => {
  alert(value); // valeur apparaît deux fois (compatibilité Map)
});
```

---

### 📜 Itérateurs `Set`

Même noms que pour `Map` :

* `set.keys()` → valeurs
* `set.values()` → idem
* `set.entries()` → renvoie `[val, val]` pour compatibilité avec `Map`

---

## 🧠 Résumé

| Structure | Clé                   | Valeur              | Ordre conservé | Doublons |
| --------- | --------------------- | ------------------- | -------------- | -------- |
| Object    | string ou symbol      | n'importe quoi      | ❌              | ✅        |
| Map       | n'importe quel type   | n'importe quoi      | ✅              | ✅        |
| Set       | aucune (valeur seule) | unique (pas de clé) | ✅              | ❌        |