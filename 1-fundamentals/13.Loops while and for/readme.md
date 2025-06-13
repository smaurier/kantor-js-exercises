# Loops: while and for

## `while` loop

- Syntaxe :

```js
while (condition) {
  // code exécuté tant que condition est vraie
}
```

- La condition est testée **avant chaque itération**.

## `do...while` loop

- Syntaxe :

```js
do {
  // code exécuté au moins une fois
} while (condition);
```

- La condition est testée **après** l'exécution du bloc.

## `for` loop

- Syntaxe :

```js
for (initialisation; condition; incrémentation) {
  // code exécuté à chaque itération
}
```

- Composants :
  - initialisation : exécutée une fois au début
  - condition : testée à chaque tour
  - incrémentation : exécutée après chaque itération

## Bonnes pratiques

- Ne pas oublier l’incrémentation pour éviter les boucles infinies.
- Préférer `for` quand on connaît le nombre d’itérations, `while` quand ce n’est pas le cas.

## Utilisation de `break` et `continue`

- `break` : sort complètement de la boucle.
- `continue` : saute l’itération courante et passe à la suivante.
