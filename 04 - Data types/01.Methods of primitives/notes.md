# Notes techniques - Primitives et wrappers

- Les wrappers (`String`, `Number`, etc.) sont temporaires et invisibles.
- Le moteur JS détruit l’objet wrapper dès que la méthode est appelée.
- `str.test = 5` ne produit pas d’erreur, mais `str.test` est `undefined` car l’attribut est perdu.
- Ne jamais utiliser `new Number()` ou équivalent en pratique.
- `typeof null === "object"` est un bug historique.
- `null` et `undefined` sont les deux seules primitives sans wrapper.
