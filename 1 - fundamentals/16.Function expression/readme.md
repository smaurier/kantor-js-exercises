# Function Expressions

## Déclaration vs Expression

- **Function Declaration** :

```js
function greet() {
  alert("Hello");
}
```

→ Hoistée (disponible avant sa définition dans le code)

- **Function Expression** :

```js
const greet = function () {
  alert("Hello");
};
```

→ Pas hoistée. Doit être définie avant appel.

## Fonctions anonymes

- Une function expression peut être **anonyme** (sans nom).
- Elle est souvent utilisée comme **valeur**, **callback** ou **fonction retournée**.

## Utilisation typique

```js
let sayHi = function () {
  alert("Hi");
};

function execute(fn) {
  fn(); // appelle la fonction passée
}

execute(sayHi);
```

## Scope

- Une function expression définie dans un bloc (`if`, `for`, etc.) **n’existe que dans ce bloc**.
