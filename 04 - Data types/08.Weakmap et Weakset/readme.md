## ✅ Résumé didactique : `WeakMap` et `WeakSet`

🧠 **On utilise `WeakMap` et `WeakSet` uniquement avec des objets.**
On s’en sert **lorsqu’on veut que les données disparaissent automatiquement avec l’objet**, sans gestion manuelle.

---

### 1. 🔥 Pourquoi “**Weak**” ?

Le mot "weak" (faible) signifie ici :

> **la structure ne garde pas la clé ou la valeur en vie si plus rien d’autre ne la référence.**

Autrement dit, **si un objet n’est plus utilisé ailleurs**, il peut être automatiquement **supprimé** de la `WeakMap` ou `WeakSet` par le **Garbage Collector**.

---

### 2. 📦 Contraintes strictes :

#### `WeakMap` :

* On **utilise uniquement des objets comme clés**
* Les valeurs peuvent être n'importe quoi (string, number, objet…)

#### `WeakSet` :

* On **utilise uniquement des objets comme valeurs**
* Pas de clé → juste un ensemble d’objets, sans doublons

✅ Les **types primitifs** (`string`, `number`, `boolean`, etc.) sont **refusés**. Cela déclenche une **erreur immédiate**.

---

### 3. 🚫 Pas d’itération ni de size

Contrairement à `Map` et `Set`, **on ne peut pas** :

* faire `weakMap.keys()` ou `weakSet.values()`
* faire `for...of`
* obtenir `.size`

Raison : **on ne connaît jamais le contenu complet**, puisque certains objets **peuvent disparaître** à tout moment.

---

### 4. 🧠 Rôle : stocker des **données associées à un objet**, **tant que l’objet est vivant**

#### Exemples :

##### ➤ Donnée temporaire liée à un objet tiers :

```js
let john = { name: "John" };
let weakMap = new WeakMap();

weakMap.set(john, "infos secrètes");
// Dès que john = null → l'entrée disparaît toute seule
```

##### ➤ Compteur de visites utilisateurs :

```js
let visits = new WeakMap();
function count(user) {
  let count = visits.get(user) || 0;
  visits.set(user, count + 1);
}
// pas besoin de nettoyer manuellement visits
```

##### ➤ Cache mémoire :

```js
let cache = new WeakMap();
function process(obj) {
  if (!cache.has(obj)) {
    cache.set(obj, calculsLourds(obj));
  }
  return cache.get(obj);
}
// Quand obj est libéré → le cache aussi
```

##### ➤ Marquage binaire d’objets avec `WeakSet` :

```js
let seen = new WeakSet();
seen.add(user); // a visité
seen.has(user); // true
```

---

### 5. ⚠️ À quoi ça sert **vraiment** ?

* À éviter les **fuites mémoire** dans les longues applis
* À suivre ou enrichir des objets **sans contrôler leur cycle de vie**
* À stocker des données **internes** sans exposer ou polluer l’objet

---

### 6. 🔍 Ce qu’on **ne peut pas faire** :

| Action                                   | Possible ? |
| ---------------------------------------- | ---------- |
| Ajouter une primitive (`"John"` ou `42`) | ❌          |
| Itérer sur tous les éléments             | ❌          |
| Connaître la taille actuelle             | ❌          |
| Stocker un objet + ses métadonnées       | ✅          |
| Laisser les données se supprimer seules  | ✅          |

---

| Structure | Clés/valeurs acceptées          | GC automatique | Iteration ? | Cas typiques                  |
| --------- | ------------------------------- | -------------- | ----------- | ----------------------------- |
| `WeakMap` | Clés : **objets uniquement**    | ✅              | ❌           | Données liées à un objet      |
| `WeakSet` | Valeurs : **objets uniquement** | ✅              | ❌           | Marquage d’objets (vu/pas vu) |



