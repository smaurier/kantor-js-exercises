# Objects: Copying and Cloning

## 1. Copie par référence

- Les objets sont **copiés par référence** :
  ```js
  let user = { name: "John" };
  let admin = user;
  admin.name = "Pete";
  // user.name === "Pete"
  ```
- Le contenu **n’est pas dupliqué**, seule l’adresse mémoire est partagée.

## 2. Const et mutation

- Une constante objet (`const obj = {}`) **peut être modifiée** :
  ```js
  const user = {};
  user.name = "Toto"; // OK
  // user = {}; // ❌ erreur
  ```

## 3. Copier un objet (shallow copy)

- Pour dupliquer **à plat** :
  - Par boucle :
    ```js
    let clone = {};
    for (let key in user) {
      clone[key] = user[key];
    }
    ```
  - Avec `Object.assign` :
    ```js
    let clone = Object.assign({}, user);
    ```
- Attention : **ne copie pas les objets imbriqués** (nested).

## 4. Clonage profond (deep copy)

- Pour dupliquer récursivement tout l’objet (objets imbriqués compris) :
  - ES2022 : `structuredClone`
    ```js
    let deepClone = structuredClone(user);
    ```
  - Autre : Librairie `_.cloneDeep()` (lodash)
  - ⚠️ `JSON.parse(JSON.stringify(obj))` ne gère pas les fonctions, dates, références circulaires, etc.

## 5. Notes

- Les **copies à plat** (shallow) dupliquent la structure principale, mais les propriétés objets restent liées à la référence originale.
- Utiliser `structuredClone` pour une duplication **propre** et indépendante (objets/arrays imbriqués).
