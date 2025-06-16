# Notes – Symbol

- `Symbol()` crée un identifiant unique, même avec le même nom.
- Sert surtout à :
  - Ajouter des propriétés “privées” ou “internes” à un objet sans collision avec des clés classiques.
  - Implémenter ou personnaliser certains protocoles du langage via les symboles natifs (`Symbol.iterator`, `Symbol.toPrimitive`, etc.).
- Les symboles ne sont **pas listés** par défaut par `Object.keys()` ou `for...in`.
- Pour retrouver toutes les propriétés symboles d’un objet : `Object.getOwnPropertySymbols(obj)` ou `Reflect.ownKeys(obj)`.
- `Symbol.for` permet d’enregistrer/récupérer un symbole globalisé.
- ⚠️ Les symboles ne sont pas 100% privés (inspectables), mais ils protègent très bien contre les collisions.
- Bon usage : propriétés réservées à une lib/framework, extension d’API, ajout de méta-infos sans fuite dans l’espace public de l’objet.
