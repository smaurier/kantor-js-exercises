# Functions (Fonctions)

## Déclaration de fonction

- Syntaxe standard :

```js
function nomDeLaFonction(param1, param2) {
  // corps de la fonction
}
```

- La fonction peut être appelée avant sa déclaration grâce au _hoisting_.

## Appel de fonction

```js
nomDeLaFonction(arg1, arg2);
```

- Les arguments sont copiés dans les paramètres.
- Si un paramètre est manquant → sa valeur est `undefined`.

## Valeur de retour

- Une fonction retourne `undefined` si aucun `return` n’est spécifié.
- Le mot-clé `return` termine immédiatement l’exécution de la fonction.

## Paramètres par défaut

```js
function greet(name = "Guest") {
  alert("Hello " + name);
}
```

## Fonctions comme valeurs

- Les fonctions peuvent être affectées à des variables :

```js
const f = function () {
  alert("Hi");
};
```

- Ou passées comme arguments (fonctions de callback).
