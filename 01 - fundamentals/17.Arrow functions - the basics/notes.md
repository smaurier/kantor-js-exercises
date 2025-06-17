# Notes – Arrow Functions

- Les arrow functions sont toujours des **expressions**, jamais des déclarations.
- Pas de `this` propre → parfait pour les callbacks, timers, méthodes internes.
- Ne pas utiliser quand une fonction a besoin de `this` dynamique (ex: dans une méthode d’objet).
- Pas de `arguments`, `super`, ou `new`.
- Toujours anonymes (même si affectées à une variable).
