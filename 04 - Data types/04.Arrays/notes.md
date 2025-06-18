# 🧠 Notes personnelles sur les tableaux

- ⚠️ Ne pas utiliser `for..in` sur les tableaux — c'est pour les objets.
- ✅ `.at(-1)` est pratique et lisible, plus propre que `arr[arr.length - 1]`
- `splice()` est super puissant, mais attention : il modifie l’original.
- Bien comprendre que `.length` peut _tronquer_ ou étendre sans contenu.
- Comparer des tableaux par valeur = boucle ou `.every()`, pas `==`.
- Le fait que `[1] + 1 === "11"` est un bon exemple de coercition non intuitive.
- Les tableaux restent des objets, donc `typeof [] === "object"`.
