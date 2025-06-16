# Methods and `this` in Objects

## Définir une méthode

- Une **méthode** est une fonction stockée comme propriété d’un objet :
  ```js
  const user = {
    sayHi: function() {
      alert("Hi!");
    }
  };
  // Raccourci ES6
  const user2 = {
    sayHi() {
      alert("Hi!");
    }
  };
  ```

## Appel d’une méthode

- On appelle une méthode via la syntaxe `objet.methode()` :
  ```js
  user.sayHi();
  ```

## Le mot-clé `this`

- À l’intérieur d’une méthode, `this` fait référence à **l’objet avant le point** :
  ```js
  const user = {
    name: "John",
    sayHi() {
      alert(this.name);
    }
  };
  user.sayHi(); // "John"
  ```

- La valeur de `this` dépend **du contexte d’appel**, pas de la déclaration.
  Par exemple :
  ```js
  let f = user.sayHi;
  f(); // ici, this vaut undefined (ou global hors strict mode)
  ```

## Attention : arrow functions

- **Arrow functions** n’ont pas leur propre `this`.  
  Elles héritent du `this` du contexte englobant.
  ```js
  const user = {
    name: "John",
    sayHi: () => { alert(this.name); }
  };
  user.sayHi(); // undefined (ici, this n’est PAS user)
  ```

## Résumé

- Méthode = fonction propriété d’un objet.
- `this` pointe vers l’objet appelant (avant le point).
- Valeur de `this` fixée **à l’appel**, pas à la déclaration.
- Arrow functions à éviter pour définir des méthodes d’objet (si besoin d’un vrai `this`).
