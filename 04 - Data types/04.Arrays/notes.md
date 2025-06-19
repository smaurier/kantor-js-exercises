# 🧠 Notes personnelles sur les tableaux

- ⚠️ Ne pas utiliser `for..in` sur les tableaux — c'est pour les objets.
- ✅ `.at(-1)` est pratique et lisible, plus propre que `arr[arr.length - 1]`
- `splice()` est super puissant, mais attention : il modifie l’original.
- Bien comprendre que `.length` peut _tronquer_ ou étendre sans contenu.
- Comparer des tableaux par valeur = boucle ou `.every()`, pas `==`.
- Le fait que `[1] + 1 === "11"` est un bon exemple de coercition non intuitive.
- Les tableaux restent des objets, donc `typeof [] === "object"`.

---

## 🔸**Groupe les méthodes par usage mental**

### ✅ _Modifier le tableau (mutables)_ :

- `push` / `pop` → fin
- `shift` / `unshift` → début
- `splice` → partout (ajout/suppression/remplacement)
- `sort` / `reverse` → trier/inverser
- `fill` → remplir
- `copyWithin` → copier une zone dans le même tableau

---

### 🔍 _Chercher dans le tableau_ :

- `indexOf`, `lastIndexOf` → première/dernière position
- `includes` → booléen : est-ce que ça existe ?
- `find` / `findIndex` → sur condition (ex : user.id === 4)
- `some` / `every` → au moins un / tous

---

### 🧼 _Transformer ou itérer sans modifier l’original_ :

- `slice` → extrait
- `map` → transforme chaque élément
- `filter` → garde certains éléments
- `reduce` → accumule
- `flat`, `flatMap` → aplatir
- `forEach` → juste boucler

---

### 📦 _Conversions et autres_ :

- `join` → tableau → string
- `toString` → idem
- `Array.from`, `Array.isArray`, `Array.of` → fonctions utilitaires
