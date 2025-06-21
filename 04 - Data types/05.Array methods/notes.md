# 🗒️ Notes – Array Methods (JavaScript.info)

## 🧠 À retenir

- Les arrays sont des **objets avec des méthodes dédiées**, certains comportements peuvent surprendre.
- `splice` est la méthode la plus complète pour manipuler un array dynamiquement.
- `slice` ne modifie **pas** le tableau original.
- `delete` laisse un **trou**, ce n’est pas une vraie suppression.
- `indexOf(NaN)` ne fonctionne pas (===), mais `includes(NaN)` oui (Object.is).
- `map`, `filter`, `reduce`, `sort` sont des **fondamentaux modernes**.
- `reduce` est très puissant mais demande de bien comprendre son **accumulateur**.

| Action sur array             | Méthode JS                        |
| ---------------------------- | --------------------------------- |
| Transformer                  | `map`                             |
| Filtrer                      | `filter`                          |
| Trouver un élément           | `find` / `findIndex`              |
| Vérifier une condition       | `some` / `every`                  |
| Réduire à une seule valeur   | `reduce`                          |
| Modifier en place            | `splice` / `sort`                 |
| Extraire un morceau          | `slice`                           |
| Ajouter/retirer du début/fin | `push`, `pop`, `shift`, `unshift` |
