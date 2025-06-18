# Notes sur les chaînes de caractères (`String`) en JavaScript

## Guillemets

- simple
- double
- backticks :
  - utile pour les expressions `${}`,
  - on peut aussi mettre les strings sur de multiples lignes
  - utilisation du tagged template :  
    Un tagged template en JavaScript, c’est quand tu mets une fonction juste avant un template literal :  
    `maFonction\`Texte ${variable}\``  
    ➡️ La fonction reçoit le texte et les variables séparément, et peut les transformer comme elle veut.

## Caractères spéciaux

- `\n` : nouvelle ligne
- `\r` : ?
- `\'`, `\"`, `` \\`  `` : échappement des guillemets
- `\\` : backslash (le premier sert d’échappement)
- `\t` : tab
- `\b`, `\f`, `\v` : ?

## Propriété `.length`

```js
alert(`My\n`.length); // 3
```

Attention, `length` est une propriété, pas une fonction. Je me suis trompé pas mal de fois.

## Accès aux lettres

```js
let str = `Hello`;
// le premier caractère
alert(str[0]); // H
alert(str.at(0)); // H

// le dernier caractère
alert(str[str.length - 1]); // o
alert(str.at(-1)); // o
```

`str[index négatif]` retourne `undefined`

### Itération

Comme un tableau, pour l'itération (car string est immutable) :

```js
for (let char of "Hello") {
  alert(char); // H, e, l, l, o
}
```

## String est immutable

Impossible de faire :

```js
str[0] = "h"; // error
```

Pour remplacer :

```js
let str = "Hi";
str = "h" + str[1];
alert(str); // hi
```

## Changer la casse

```js
alert("Interface".toLowerCase()); // interface
alert("Interface"[0].toLowerCase()); // 'i'
```

- `toLowerCase()`
- `toUpperCase()`

## Chercher un sous-string

### `str.indexOf(substring, position)`

```js
let str = "Widget with id";
alert(str.indexOf("Widget")); // 0
alert(str.indexOf("widget")); // -1 (case-sensitive)
alert(str.indexOf("id")); // 12
```

Trouver toutes les occurrences :

```js
let str = "As sly as a fox, as strong as an ox";
let target = "as";
let position = 0;

while (true) {
  let foundPos = str.indexOf(target, position);
  if (foundPos === -1) break;

  alert(`Trouvé à ${foundPos}`);
  position = foundPos + 1;
}
```

### `str.lastIndexOf(substr, position)`

Même principe que `indexOf` mais depuis la fin.

> Problème de rétrocompatibilité : on aurait pu permettre les index négatifs dans `indexOf`.

### Vérification simple avec `if`

```js
let str = "Widget with id";
if (str.indexOf("Widget") != -1) {
  alert("We found it");
}
```

## Méthodes modernes : `includes`, `startsWith`, `endsWith`

```js
"Widget with id".includes("Widget"); // true
"Hello".includes("Bye"); // false
"Widget".includes("id", 3); // false
"Widget".startsWith("Wid"); // true
"Widget".endsWith("get"); // true
```

## Extraire un sous-string

### `slice(start, end)`

```js
let str = "stringify";
str.slice(2); // 'ringify'
str.slice(-4, -1); // 'gif'
```

### `substring(start, end)`

```js
str.substring(2, 6); // "ring"
str.substring(6, 2); // "ring"
```

> Les index négatifs ne sont pas autorisés. → Pas intéressant par rapport à `slice`.

### `substr(start, length)`

⚠️ Déprécié

## Comparaison de chaînes

```js
"a" > "Z"; // true (97 > 90)
```

Les lettres accentuées (ex : `'Ö'`) ont des codes encore plus élevés.

### Fonctions utiles

- `str.codePointAt(pos)` → retourne le code UTF-16
- `String.fromCodePoint(code)` → retourne un caractère

### Pour une comparaison selon la langue :

```js
str1.localeCompare(str2);
```

- renvoie < 0 si `str1 < str2`
- renvoie > 0 si `str1 > str2`
- renvoie 0 si égalité

On peut passer :

- une langue (`fr`, `de`, etc.)
- des options (sensibilité à la casse, accents…)
