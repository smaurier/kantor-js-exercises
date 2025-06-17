# Function Constructors en JavaScript

## 1. Origine et utilité

- Avant ES6, JS n’avait pas de mot-clé `class`.  
- Les constructeurs sont des **fonctions ordinaires** (commençant par une majuscule par convention), appelées avec `new` pour créer des objets.

## 2. Comment ça marche ?

- Quand tu fais `new User("Alice")`, JS fait :
  1. Crée un objet vide `this = {}`.
  2. Exécute la fonction avec ce `this`.
  3. Par défaut, retourne `this`, sauf si la fonction renvoie explicitement un objet.

  ```js
  function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  let user = new User("Alice");
  ```

- Les propriétés/méthodes ajoutées à `this` deviennent membres de l’objet.

## 3. `new.target`

- Si une fonction constructeur est appelée **sans** `new`, `new.target` sera `undefined`.
- Bonne pratique : avertir si l’utilisateur oublie `new` :

  ```js
  function User(name) {
    if (!new.target) return new User(name);
    this.name = name;
  }
  ```

## 4. Retour explicite

- Si le constructeur renvoie un **objet**, ce sera la valeur retournée, pas `this`.
- Si retour autre qu’objet, JS ignore ce `return` et retourne quand même `this`.

  ```js
  function BigUser() {
    this.name = "John";
    return { name: "Godzilla" }; // objet → remplace le this
  }
  alert(new BigUser().name); // "Godzilla"

  function SmallUser() {
    this.name = "John";
    return 42; // primitif → ignoré
  }
  alert(new SmallUser().name); // "John"
  ```

## 5. Parenthèses optionnelles

- `let user = new User;` fonctionne (parenthèses facultatives si aucun argument).

## 6. Méthodes dans le constructeur

- Tu peux ajouter des méthodes directement dans le constructeur :

  ```js
  function User(name) {
    this.name = name;
    this.sayHi = function() {
      alert("Hi, I'm " + this.name);
    };
  }
  let user = new User("Alice");
  user.sayHi();
  ```

  ⚠️ Mais chaque objet aura sa propre copie de la méthode (pas partagé entre instances) : préfère le prototype ou les classes pour méthodes partagées.

## 7. Utilisation “one-shot”

- On peut faire :  
  ```js
  let user = new function() {
    this.name = "John";
    // code complexe de création…
  };
  ```
  Mais usage rare, surtout pour initialiser un objet avec logique avancée “en un seul appel”.

---

## Pourquoi pas des `class` tout de suite ?

- Pour bien saisir que JS reste un langage à base de prototypes, pas de vraies classes au sens classique.
- Le mot-clé `class` d’ES6 **n’est que du sucre syntaxique** : tout reste de la construction d’objets via fonction sous le capot.

---

## À retenir

- “Un constructeur est juste une fonction, mais appelée avec `new` et écrite avec une majuscule.”
- “Le `this` généré par `new` est l’objet retourné (sauf si retour explicite d’un objet).”
- “Éviter de définir des méthodes dans chaque instance pour des raisons de perf/mémoire.”
