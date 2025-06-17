# Logical Operators

## OR (`||`)

- Retourne la **première valeur truthy** ou la dernière si toutes sont falsy.
- Exécution **de gauche à droite**, arrêt dès qu’un truthy est trouvé (short-circuit).

```js
null || 0 || "hello"; // → "hello"
false || 0 || NaN; // → NaN
```

## AND (`&&`)

- Retourne la **première valeur falsy**, ou la dernière si toutes sont truthy.
- Exécution de gauche à droite, arrêt dès qu’un falsy est rencontré.

```js
1 && "hello" && 5; // → 5
0 && "test"; // → 0
```

## NOT (`!`)

- Convertit en booléen, puis inverse.

```js
!true; // → false
!!"hello"; // → true
!!0; // → false
```

## ⚠️ Règle d’or

- `||` et `&&` ne retournent **pas des booléens** sauf si forcés par `!` ou une condition.
- Ils retournent une **valeur**, qui peut être un string, number, object, etc.

## Inclusion logique : test d'intervalle

```js
const age = prompt("How old are you?");
if (age >= 14 && age <= 90) {
  alert("Your age is between 14 and 90");
} else {
  alert("You're out of the range");
}
```

## Exclusion logique (forme inversée)

```js
if (!(age >= 14 && age <= 90)) {
  alert("You're out of the range");
}

// ou équivalent :
if (age < 14 || age > 90) {
  alert("You're out of the range");
}
```

## Cas pièges

```js
if (-1 || 0) alert("first"); // ✅ -1 est truthy → alert
if (-1 && 0) alert("second"); // ❌ 0 est falsy → pas d’alert
if (null || (-1 && 1)) alert("third"); // ✅ -1 && 1 = 1 → null || 1 = 1 → alert
```

## Résumé

- `||` : retourne le premier truthy
- `&&` : retourne le premier falsy
- `!` : inverse la vérité logique
- `alert()` → retourne `undefined` → toujours falsy
