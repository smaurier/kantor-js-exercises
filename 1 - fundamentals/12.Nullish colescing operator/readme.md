# Nullish Coalescing (`??`)

## Description

- L'opérateur `??` retourne la **première valeur définie** (c’est-à-dire différente de `null` ou `undefined`).
- Il est utile quand `0`, `false`, ou `""` sont des **valeurs valides** à conserver.

## Différence avec `||`

- `||` retourne la première **valeur truthy**.
- `??` retourne la première **valeur définie** (≠ `null`, `undefined`).

### Exemples

```js
null || "default"; // → "default"
undefined || "default"; // → "default"
0 || "default"; // → "default" ❌

null ?? "default"; // → "default"
undefined ?? "default"; // → "default"
0 ?? "default"; // → 0 ✅
"" ?? "default"; // → "" ✅
false ?? "default"; // → false ✅
```

## ⚠️ SyntaxError : pas de mélange avec `||` ou `&&` sans parenthèses

- JS interdit de combiner `??` avec `||` ou `&&` sans parenthèses explicites.

```js
// ❌ SyntaxError
// let x = a || b ?? c;

// ✅ Correct
let x = (a || b) ?? c;
```

## Cas d’usage typique

```js
let userInput = null;
let finalValue = userInput ?? "Valeur par défaut";
console.log(finalValue); // → "Valeur par défaut"
```
