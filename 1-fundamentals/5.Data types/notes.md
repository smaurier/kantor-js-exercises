# notes.md

- `typeof null === "object"` : c’est un **bug historique** non corrigé pour compatibilité.
- `NaN === NaN` renvoie `false` : NaN est **non équivalent à lui-même**.
- `bigint` ne peut pas être mélangé avec `number` → il faut caster ou rester homogène.
- `typeof` renvoie toujours une **string** (ex : `"number"`, pas un mot-clé JS).
- `symbol` est un type primitif rarement utilisé, mais utile pour créer des clefs vraiment uniques.
