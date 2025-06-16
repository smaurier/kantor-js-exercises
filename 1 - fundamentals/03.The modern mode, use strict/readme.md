# Le mode strict (`"use strict"`)

- Le mode strict a été introduit en ES5 pour corriger des comportements trop permissifs du moteur JavaScript.
- Il se déclare avec `"use strict";` au début d’un script ou d’une fonction.
- Il empêche certaines erreurs silencieuses (ex : création implicite de variables globales).
- Ce mode est **automatiquement activé** dans les modules ES et dans les classes (`import/export`, `class`).
- Tous les frameworks modernes (React, Vue, etc.) l’activent par défaut → tu le côtoies déjà sans le savoir.
