# Variables

## Déclarations

- `let` : pour déclarer une variable *modulable* (valeur modifiable).
- `const` : pour une variable *immuable* (non réaffectable). Attention : l’objet référencé peut rester modifiable.
- `var` : à **éviter**. Elle est hoistée, non bloquée lexicalement, et a une portée fonctionnelle. Obsolète dans du code moderne.

## Conventions

- Les noms de variables suivent la convention **camelCase** (par défaut).
- On réserve les **MAJUSCULES** (`UPPER_CASE`) aux constantes connues à l’avance (valeurs magiques, config figée).
- Les noms doivent commencer par une lettre, `$` ou `_`. Ils ne peuvent pas commencer par un chiffre.
- Seules les lettres latines sont acceptées dans un contexte professionnel. D'autres scripts sont valides, mais à éviter.
- ⚠️ Certains mots sont **réservés** (`let`, `class`, `return`, etc.).

## Bonnes pratiques

- Les noms doivent être **explicites** : éviter `x`, `y`, `data` hors contexte.
- Un bon nom décrit le rôle de la variable **sans commentaire nécessaire**.
