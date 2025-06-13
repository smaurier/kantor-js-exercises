# Arrow Functions – The Basics

## Syntaxe

- Forme courte des function expressions :

```js
const func = (param1, param2) => expression;
```

- Équivaut à :

```js
const func = function (param1, param2) {
  return expression;
};
```

## Variantes

```js
// 1 paramètre → parenthèses optionnelles
const double = (x) => x * 2;

// Aucun paramètre → parenthèses obligatoires
const sayHi = () => alert("Hi");

// Plusieurs instructions → bloc + return obligatoire
const sum = (a, b) => {
  let result = a + b;
  return result;
};
```

## Pas de `this`, `arguments`, `super`, `new`

- Arrow functions **ne créent pas leur propre `this`**.
- `this` est capté depuis le scope extérieur → utile dans les callbacks.
- Ne peuvent **pas** être utilisées comme constructeur (`new` interdit).
