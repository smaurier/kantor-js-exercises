# Conditions et opérateurs logiques

## `if`, `else`, `else if`

- La condition dans `if (...)` est convertie en **booléen** via coercion.
  - Ex: `if ("0")` exécute bien le bloc, car `"0"` est une string **non vide** → truthy.

```js
if ("0") {
  alert("Hello"); // ✅ affiché
}
```

- Tu peux chaîner plusieurs conditions avec `else if`.

## Opérateur ternaire `?`

- Syntaxe : `condition ? valeur_si_true : valeur_si_false`
- Peut être imbriqué, mais **perd rapidement en lisibilité** :

```js
let age = prompt("Age ?", 18);
let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";
```

- À éviter si le bloc devient trop imbriqué → préférer `if/else` pour la lisibilité.

## ⚠️ Erreurs classiques

- `"0"` ou `"false"` (string) sont **truthy**
- Comparer un string à un nombre sans conversion explicite peut être dangereux

## Cas spécifiques

```js
const nameOfJS = prompt("What is the 'official' name of JavaScript?");
if (nameOfJS.toLowerCase() === "ecmascript") {
  alert("Right!");
} else {
  alert("You don't know ES");
}
```

- _ECMAScript_ est la **spécification technique** du langage.
- _JavaScript_ est **le nom commercial** de l'implémentation la plus connue.

```js
const number = +prompt("Tell me a number");

if (number < 0) {
  alert(1);
} else if (number > 0) {
  alert(-1);
} else if (number === 0) {
  alert(0);
} else {
  alert("Not a number");
}
```

```js
let result = a + b < 4 ? "Below" : "Over";
```

```js
let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
```
