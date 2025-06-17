# Notes – JavaScript Specials

- `typeof null === "object"` est un bug historique (jamais corrigé pour compatibilité).
- `NaN !== NaN` est vrai : pour tester, utiliser `Number.isNaN()`.
- Les comparaisons avec `==` déclenchent des conversions → toujours préférer `===`.
- Les objets vides (`[]`, `{}`) sont truthy.
- Appeler une fonction constructeur sans `new` peut causer des effets de bord graves.
