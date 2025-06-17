# Symbol

## 1. Définition

- `Symbol` est un **type primitif** qui sert à créer des identifiants uniques (même nom = symboles différents).
  ```js
  let id1 = Symbol("id");
  let id2 = Symbol("id");
  id1 === id2; // false
  ```

## 2. Cas d’usage principaux

### A. Propriétés "cachées" ou protégées dans un objet

- Un symbole utilisé comme clé **n’est pas visible** dans les boucles `for...in` ni via `Object.keys()`.
- Ça permet d’ajouter des propriétés "internes" sans risque de collision avec d’autres propriétés.
  ```js
  let user = {};
  let secret = Symbol("secret");
  user[secret] = 123;
  ```

### B. Protocoles internes du langage (Symbol.*)

- Certains symboles “bien connus” (`Symbol.iterator`, `Symbol.toPrimitive`, etc.) servent à **personnaliser le comportement natif** de JS pour tes objets (itération, coercition, etc.).
  Exemple :
  ```js
  let obj = {
    [Symbol.toPrimitive](hint) {
      return hint === "number" ? 42 : "coucou";
    }
  };
  alert(+obj); // 42
  alert(`${obj}`); // "coucou"
  ```
- C’est ce point-là qui te manquait.

## 3. Visibilité/accès

- Les symboles **ne sont pas totalement invisibles** :  
  - `Object.getOwnPropertySymbols(obj)` retourne les symboles d’un objet.
  - `Reflect.ownKeys(obj)` retourne toutes les clés (strings + symbols).

## 4. Symbol.for

- `Symbol.for("key")` crée un symbole **global** accessible partout via ce nom (registry global).
  - Attention : `Symbol("foo") !== Symbol.for("foo")`

---

**À retenir** :
- Un symbole est toujours unique, même s’il porte le même nom.
- Sert à éviter les collisions de propriétés sur des objets ouverts/partagés.
- Utile pour les “protocoles” du langage (iterator, toPrimitive, etc.).
- Pas 100% caché, mais bien plus “privé” qu’une propriété string classique.
