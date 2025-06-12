# Data Types (Types de données)

## Types primitifs

- `number` : tous les nombres (entiers ou flottants).  
  Exemples spéciaux :
  - `Infinity`, `-Infinity` : résultats d’opérations dépassant les limites.
  - `NaN` : résultat d'une opération invalide (`"abc" * 2`). Propagation : `NaN + 1 = NaN`.

- `bigint` : pour les très grands entiers, suffixés par `n`.  
  Exemple : `const id = 12345678901234567890n`

- `string` : chaîne de caractères entre `''`, `""` ou `` `backticks` ``.  
  Avec les backticks, on peut interpoler :  
  ```js
  let name = "Ilya";
  `Hello ${name}` // "Hello Ilya"
  ```

- `boolean` : true ou false. Résulte souvent d’une comparaison.

- `null` : valeur volontairement vide / "pas de valeur".

- `undefined` : valeur par défaut d’une variable non initialisée.

- `symbol` : identifiant unique (rarement utilisé en JS de base, utile pour les clefs privées ou les APIs bas niveau).

Type complexe

- `object` : conteneur de propriétés. Tous les objets JS héritent d’un prototype. Même array, function ou date sont des objets.


## L’opérateur typeof

Permet de connaître le type d’une valeur :

 ```js
typeof "hello" // "string"
typeof 123     // "number"
typeof null    // ⚠️ "object" → bug historique
```

typeof(value) et typeof value sont équivalents (parenthèses optionnelles).