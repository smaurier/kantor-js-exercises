# The `switch` Statement

## Description

- `switch` permet de comparer une valeur contre différents cas (`case`) et d'exécuter le bloc correspondant.
- Plus lisible qu'une série de `if/else if` quand on compare une même variable à plusieurs valeurs.

## Syntaxe

```js
switch (expression) {
  case valeur1:
    // bloc
    break;
  case valeur2:
    // bloc
    break;
  default:
  // bloc exécuté si aucun `case` ne correspond
}
```

## Important

- Le mot-clé `break` empêche l'exécution des `case` suivants.
- Si `break` est omis, les `case` suivants s’exécutent tous (_fallthrough_).
- `switch` utilise la comparaison stricte (`===`).

## Exemple

```js
let fruit = "apple";

switch (fruit) {
  case "banana":
    alert("Yellow");
    break;
  case "apple":
    alert("Red");
    break;
  default:
    alert("Unknown");
}
```
