# Operators (Opérateurs)

## Opérandes & opérateurs

- Une **opération** est composée d’opérandes (valeurs) et d’un opérateur (symbole entre les valeurs).
  - *Binaire* : deux opérandes → `a + b`
  - *Unaire* : un seul opérande → `+a`, `-b`, `++i`, etc.

## Opérateurs arithmétiques

- `+`, `-`, `*`, `/`, `%`, `**` : somme, soustraction, multiplication, division, modulo, puissance.
- `+` : concatène les strings si **au moins un opérande est une string**.

```js
"4" + 2 // "42"
4 + 2 + "px" // "6px"
```

## Conversions implicites

- `+` déclenche **la conversion en string** si un des deux opérandes est une string.
- `-`, `*`, `/` → forcent les opérandes en **number**.

```js
"6" / "3" → 2
"4px" - 2 → NaN
null + 1 → 1
undefined + 1 → NaN
```

- Le `+` unaire permet de convertir en nombre :
```js
+"12" → 12
+true → 1
+false → 0
+"" → 0
```

## Priorité (precedence)

- Les opérateurs ont une **priorité** d’exécution (`*` avant `+`, etc.).
- Tu peux forcer l’ordre avec des **parenthèses**.

```js
let c = 3 - (a = b + 1);
```

→ Ici, `a` prend la valeur `b + 1`, puis `c` reçoit `3 - a`.

## Affectation et chaînage

- L’opérateur `=` retourne une valeur, donc le chaînage est possible :
```js
a = b = c = 4; // valide, mais peu lisible
```

## Incrément / décrément

- `++i` : pré-incrément → augmente **avant** de retourner
- `i++` : post-incrément → retourne **avant** d’augmenter

```js
let a = 1;
let b = ++a; // a = 2, b = 2
let c = a++; // a = 3, c = 2
```

## Opérateurs bitwise

- `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>` : opérations sur bits.
- Utilisés dans des cas bas niveau, flags, ou optimisation.
- `~` n’est **pas** équivalent à `!` :
  - `~x` = `-(x + 1)` (négation bit à bit)
  - `!x` = inverse booléen
