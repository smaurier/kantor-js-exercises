# JavaScript Specials

## Étrangetés notables

- `null` est de type `"object"` → bug historique.
- `NaN` est de type `"number"` et **n'est jamais égal à lui-même** :

```js
NaN === NaN; // false
```

## Comparaison non intuitive

```js
[] == false; // true
("" ==
  (0)[0]) == // true
  0; // true
```

## Conversion implicite

- JS tente de convertir les types dans certaines opérations (`==`, `+`, etc.).
- Mieux vaut utiliser `===` pour éviter les surprises.

## Truthy / Falsy

- Falsy : `false`, `0`, `""`, `null`, `undefined`, `NaN`
- Tout le reste est truthy (même `"0"`, `"false"`, `[]`, `{}`)

## typeof anomalies

```js
typeof null; // "object"
typeof NaN; // "number"
typeof function () {}; // "function"
```

## Fonction constructeur oubliée

```js
function User(name) {
  this.name = name;
}
const user = User("Alice"); // ❌ this devient global (undefined en strict mode)
```

- Toujours appeler les constructeurs avec `new`.

## Propriétés spéciales

- Les objets peuvent être accédés avec des chaînes contenant des caractères spéciaux :

```js
let obj = { "weird-key": 42 };
console.log(obj["weird-key"]); // 42
```
