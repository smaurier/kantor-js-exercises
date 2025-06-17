
# Les nombres en JavaScript

JavaScript propose deux types principaux de nombres :
- **Nombre régulier** (`number` en double précision 64 bits IEEE-754)
- **BigInt** pour représenter des entiers très grands avec précision

---

## Syntaxe et lisibilité

- Il n'y a aucune différence entre `1000000` et `1_000_000` en JavaScript.
  L'underscore (`_`) est un **sucre syntaxique** pour améliorer la lisibilité.

- Dans la vie réelle, on écrit souvent `1 Mrd`.  
  En JavaScript :
  ```js
  let milliard = 1e9;
  alert(7.3e9); // 7300000000
  ```
  Pour les petites valeurs :
  ```js
  let milli = 1e-6; // équivaut à 0.000001
  ```

---

## Hexadécimal, binaire et octal

- `0xff` : hexadécimal pour 255 (utile pour couleurs, encodage)
- `0b11111111` : binaire
- `0o377` : octal

---

## Méthode `.toString(base)`

Permet d'afficher un nombre dans n'importe quelle base entre 2 et 36 :
```js
let num = 255;
num.toString(16); // "ff"
num.toString(2);  // "11111111"
1234..toString(36); // "2n9c"
```
> 💡 Pour éviter les erreurs, écrire `1234..toString()` ou `(1234).toString()`

---

## Arrondis (Rounding)

- `Math.floor(3.2)` → 3 ; `Math.floor(-1.2)` → -2
- `Math.ceil(2.1)` → 3 ; `Math.ceil(-1.2)` → -1
- `Math.round(3.5)` → 4 ; `Math.round(-3.5)` → -3
- `Math.trunc(3.9)` → 3 ; `Math.trunc(-4.1)` → -4

Pour arrondir à deux décimales :
```js
let num = 1.23456;
alert(Math.round(num * 100) / 100); // 1.23
```

### `.toFixed(n)`
```js
let num = 12.34;
alert(num.toFixed(1)); // "12.3"
```
> ⚠️ Retourne une **chaîne** ; on utilise souvent `+num.toFixed(2)` pour récupérer un number.

### `.toPrecision(n)`
```js
let n = 123.456;
console.log(n.toPrecision(4)); // "123.5"
```

---

## Problèmes de précision

- `0.1 + 0.2 === 0.3` retourne `false` à cause de la représentation binaire des flottants.

Solutions :
- Travailler en centimes :
  ```js
  let prix = (100 + 200) / 100; // 3.00
  ```
- Ou forcer l'arrondi :
  ```js
  let sum = 0.1 + 0.2;
  alert(+sum.toFixed(2)); // "0.3"
  ```

---

## Nombres trop grands

```js
alert(9999999999999999); // 10000000000000000
```
> Dépassement de `Number.MAX_SAFE_INTEGER`

Solution :
```js
let big = 9999999999999999n;
console.log(big + 1n); // 10000000000000000n
console.log(big + 2n); // 10000000000000001n
```

---

## 0 et -0

- Deux zéros distincts : `0` et `-0`
- Cela vient du standard IEEE-754

---

## NaN et Infinity

- `typeof NaN === "number"` (oui, c’est étrange)
- `NaN === NaN` → `false`

Utiliser :
```js
isNaN("str");            // true
Number.isNaN("str");     // false
isFinite("15");          // true
Number.isFinite("15");   // false
```

---

## Comparaison avec `Object.is`

Plus précis que `===` pour certains cas limites :
```js
Object.is(NaN, NaN);     // true
Object.is(0, -0);         // false
```

---

## `parseInt` / `parseFloat`

- `parseInt("100px")` → 100
- `parseFloat("12.5em")` → 12.5
- `parseInt("0xff", 16)` → 255

> `parseInt("12.3")` → 12 ; il s'arrête à la virgule

---

## Fonctions utiles

- `Math.random()` → [0, 1[
- `Math.max(...)`, `Math.min(...)`
- `Math.pow(2, 10)` → 1024 (ou préférer `2 ** 10`)
