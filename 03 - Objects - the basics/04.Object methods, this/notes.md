# Notes – Methods and `this`

- `this` référence l'objet AVANT le point à l’appel.
- Affecter une méthode à une variable “perd” le contexte (`this` devient undefined).
- Les arrow functions n’ont jamais leur propre `this`, elles héritent du parent.
- Jamais d’arrow function pour les méthodes où tu as besoin de `this`.
- Le raccourci ES6 pour définir une méthode est préféré : `sayHi() { ... }`