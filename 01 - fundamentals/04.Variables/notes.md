# notes.md

- `const` garantit la non-réaffectation, mais **pas l'immuabilité interne**. Les objets, tableaux, etc. restent modifiables.
- `var` a une portée **fonctionnelle** (non bloc) et est **hoistée sans initialisation**. Elle peut mener à des bugs subtils.
- En strict mode, nommer une variable avec un mot réservé provoque une **erreur de syntaxe**.
- Les noms en camelCase sont la norme dans tous les projets JS pros. Les constantes figées peuvent être en `UPPER_CASE`.
