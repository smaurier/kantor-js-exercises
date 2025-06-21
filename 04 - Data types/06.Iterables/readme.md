# Résumé — Les itérables en JavaScript (`[Symbol.iterator]`)

## ⚡ C’est quoi un itérable ? — _À quoi ça sert ?_

Un **itérable** est un objet qui expose la méthode spéciale `[Symbol.iterator]()`, renvoyant un **itérateur** (objet avec la méthode `next()`).
**À quoi ça sert ?**  
Permet de rendre n’importe quel objet “parcourable” avec :

- la boucle `for...of`
- `Array.from`
- le spread `...`
- etc.

> **But :** Fournir un protocole universel pour itérer sur des objets personnalisés (pas juste les arrays).

---

## 🛠️ Comment on fait ? — _Syntaxe & usage_

**Exemple minimal :**

```js
let obj = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        if (i < 3) return { value: i++, done: false };
        return { done: true };
      },
    };
  },
};
```

**À quoi ça sert ?**
Tu contrôles exactement la logique de parcours (ordre, limite, valeur, etc.), même pour des structures ou séquences non standards.

---

## 🔁 Boucler sur un itérable avec `for...of` — _Pourquoi l’utiliser ?_

```js
for (let x of obj) {
  console.log(x); // 0, 1, 2
}
```

**À quoi ça sert ?**
Lire chaque valeur, une par une, sans te soucier de l’implémentation interne de l’objet.

- Sûr, lisible, fonctionne sur tout ce qui respecte `[Symbol.iterator]`.

---

## 📦 Convertir un itérable en array avec `Array.from(obj)` — _Pourquoi ?_

```js
let arr = Array.from(obj);
```

**À quoi ça sert ?**

- Obtenir un **vrai tableau JS** (donc toutes les méthodes natives : `map`, `filter`, `slice`, accès par index, etc.).
- “Snapshotter” les valeurs produites à un instant T (par ex, sur un itérable génératif ou dynamique).
- Travailler plus facilement sur le résultat (tri, transformation en chaîne, etc.)
- **Attention :** ne jamais faire sur un itérable infini, ça ne s’arrête jamais.

> **Cas concret :**
>
> - Ton range custom n’a pas `.map()` : tu fais `Array.from(range).map(...)` pour chaîner les méthodes.

---

## 🎭 Différence “itérable” vs “array-like” — _À quoi ça sert de savoir ?_

|                         | Itérable (`[Symbol.iterator]`) | Array-like (`length` + index) |
| ----------------------- | ------------------------------ | ----------------------------- |
| Parcouru par `for...of` | ✅ Oui                         | ❌ Non                        |
| Accès par index         | ❌ Pas obligatoire             | ✅ Oui                        |
| Méthodes d’Array        | ❌ Non                         | ❌ Non                        |
| Exemples                | Set, Map, range, String        | arguments, NodeList           |

**À quoi ça sert ?**

- Ne pas se tromper dans l’utilisation des APIs JS : savoir pourquoi certains objets passent dans `for...of` et d’autres non, pourquoi `map` ne marche pas toujours, etc.
- Comprendre pourquoi tu dois parfois convertir (`Array.from`).

---

## 🚀 Mapping à la volée avec Array.from — _Pourquoi ?_

```js
Array.from(range, (x) => x * 2); // [2, 4, 6, ...]
```

**À quoi ça sert ?**

- Générer directement un tableau transformé (pas besoin d’un `map` derrière).
- Pratique pour travailler avec des données produites dynamiquement.

---

## 🧨 Pièges, edges & cas particuliers — _À quoi faire gaffe ?_

- **Itérateurs infinis :**
  Possible (ex : compteur sans fin). Tu dois toujours gérer la fin toi-même (ex : break dans la boucle).
  ⚠️ `Array.from` sur un itérable infini = plantage/freez.

- **Itérable ≠ array-like :**
  Un array-like (NodeList, arguments, `{0:..., 1:..., length:...}`) n’a PAS forcément `[Symbol.iterator]` → `for...of` plante.

- **Itérateur avec état partagé :**
  Si tu retournes `this` comme itérateur sans réinitialiser l’état dans `[Symbol.iterator]`, impossible d’avoir deux boucles en // ou de relancer une boucle sur le même objet → bug potentiel.

- **Unicode et Strings :**
  Les strings sont itérables et `Array.from(str)` découpe correctement chaque caractère, même les emojis (contrairement à `str.split("")` ou `str.slice()`).

---

## 📝 Exemples clés et “à retenir”

### 1. Range custom

```js
let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;
    return {
      next() {
        if (current <= last) return { value: current++, done: false };
        return { done: true };
      },
    };
  },
};
// for...of OK, Array.from(range) OK
```

### 2. Itérateur infini (attention !)

```js
let infinite = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        return { value: i++, done: false };
      },
    };
  },
};
// Utiliser break dans la boucle for...of !
```

### 3. Array.from et Unicode

```js
let str = "𝒳 😂 𩷶";
Array.from(str).slice(1, 3).join(""); // 😂 𩷶 (Unicode correct)
str.slice(1, 3); // Problème d’encodage sur les emojis
```
