## 💡 À retenir (mémo)

- `[Symbol.iterator]` = rendre n’importe quel objet parcourable par `for...of`, `Array.from`, spread, etc.
- **Toujours** retourner un itérateur neuf/indépendant à chaque appel (jamais partager l’état de l’itérateur sauf cas volontaire).
- **`Array.from(obj)`** = “snapshot” du résultat, pour bénéficier de toutes les méthodes de tableau JS natif.
- Ne jamais confondre array-like et itérable.
- Toujours vérifier le cas des strings et Unicode pour ne pas couper des caractères multi-octets.
