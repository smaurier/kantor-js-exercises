# Garbage Collection in JavaScript

## 1. Automatique et transparent

- Le **garbage collector** (ramasse-miettes) JS est **automatique** : tu ne gères jamais la mémoire explicitement.
- Le moteur JS (ex : V8, SpiderMonkey…) libère la mémoire quand un objet/variable **n’est plus atteignable** (“unreachable”).

## 2. Notion de “reachability” (atteignabilité)

- Un objet/variable est dit **atteignable** tant qu’il peut être *trouvé* via une chaîne de références à partir de :
    - une variable globale,
    - une variable locale d’une fonction active,
    - une closure vivante,
    - ou une autre valeur déjà atteignable.

- Dès qu’il n’existe **plus aucun chemin** pour accéder à l’objet, il devient “unreachable” → candidat à la suppression.

## 3. Référence ≠ atteignabilité

- **Être référencé** dans une variable **inaccessible** ne suffit pas : si la variable est sortie de portée ou si l’objet n’est plus utilisé, il sera collecté.
- Par exemple :
    ```js
    function demo() {
      let obj = { test: 123 };
      // obj est atteignable ici
    }
    // ici, obj n’est plus atteignable, donc collecté
    ```

## 4. Cycles et exceptions

- Les moteurs modernes détectent les cycles (objets qui se réfèrent mutuellement mais sont inatteignables depuis l’extérieur).
- Les objets DOM détachés (éléments supprimés du document mais toujours référencés ailleurs) restent **en mémoire tant qu’une référence existe**.

## 5. Conclusion

- Pas besoin de libérer la mémoire “à la main” en JS.
- Mais attention aux références involontaires (closures, timers, listeners, objets globaux…) qui peuvent empêcher la libération.

---

## À retenir pour l’entretien/clean code :

- “Un objet reste en mémoire **tant qu’il est atteignable** (pas seulement référencé).”
- “Le GC est automatique, mais il faut éviter les leaks en gardant des références inutiles.”
- “Pas besoin de delete ou free — c’est géré par le moteur.”
