## 📌 À quoi servent ces méthodes ?

En JavaScript, quand tu as un objet, tu peux avoir besoin d’accéder facilement à ses clés (noms des propriétés), à ses valeurs, ou aux deux en même temps.

Par exemple, si tu as cet objet :

```js
let user = {
  name: "John",
  age: 30,
};
```

Tu pourrais vouloir :

- **Lister les clés** (`name`, `age`)
- **Lister les valeurs** (`John`, `30`)
- **Lister les clés et valeurs ensemble** (`name: John`, `age: 30`)

Les méthodes suivantes facilitent ces opérations.

---

## 📌 Les méthodes en détail :

### 🟢 Object.keys(obj)

Cette méthode renvoie **un tableau des clés** d'un objet.

```js
Object.keys(user);
// ["name", "age"]
```

### 🟢 Object.values(obj)

Cette méthode renvoie **un tableau des valeurs** d'un objet.

```js
Object.values(user);
// ["John", 30]
```

### 🟢 Object.entries(obj)

Cette méthode renvoie **un tableau de paires `[clé, valeur]`**.

```js
Object.entries(user);
// [["name", "John"], ["age", 30]]
```

---

## 📌 Différence avec `Map`

Tu peux aussi avoir rencontré ces méthodes avec `Map`. Voici la différence principale :

| Méthode      | Map          | Objet                                 |
| ------------ | ------------ | ------------------------------------- |
| Appel        | `map.keys()` | `Object.keys(obj)` (pas `obj.keys()`) |
| Type renvoyé | Iterable     | Vrai tableau (`Array`)                |

Pourquoi cette différence ?

- **Flexibilité** : Comme les objets sont souvent utilisés pour construire des structures complexes, JavaScript propose ces méthodes en tant que fonctions globales (`Object.keys(obj)`), pour éviter des conflits avec des méthodes personnalisées sur tes objets.
- **Historique** : Ces méthodes renvoient directement un tableau pour des raisons de compatibilité historique avec d'anciennes fonctionnalités du langage.

---

## 📌 Cas particulier : les propriétés symboliques

Ces méthodes ignorent les clés définies par des symboles (`Symbol()`), tout comme les boucles `for...in`.

Si tu veux accéder aux clés symboliques :

- Utilise `Object.getOwnPropertySymbols(obj)` → tableau des clés symboliques uniquement.
- Utilise `Reflect.ownKeys(obj)` → tableau avec **toutes les clés** (normales et symboliques).

---

## 📌 Manipuler et transformer un objet facilement

Les objets JavaScript n’ont pas de méthodes comme `.map()` ou `.filter()`. Pour contourner cela, tu peux combiner `Object.entries()` et `Object.fromEntries()`.

**Exemple pratique** : doubler les prix d’un objet :

```js
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(doublePrices);
// { banana: 2, orange: 4, meat: 8 }
```

Que se passe-t-il ici ?

1. **`Object.entries(prices)`** : tu obtiens `[["banana", 1], ["orange", 2], ["meat", 4]]`.
2. `.map()` transforme chaque entrée en doublant la valeur.
3. **`Object.fromEntries()`** reconstruit un nouvel objet avec ces nouvelles paires modifiées.

---

## 🧑‍💻 Exemple de boucle concrète :

Pour afficher toutes les valeurs d’un objet :

```js
for (let value of Object.values(user)) {
  alert(value); // Affiche "John", puis 30
}
```

---

## 🎯 En résumé simple :

- **`Object.keys(obj)`** → clés uniquement.
- **`Object.values(obj)`** → valeurs uniquement.
- **`Object.entries(obj)`** → clés et valeurs ensemble.

Ces méthodes facilitent grandement la manipulation et l'itération des objets en JavaScript, tout en restant flexibles.
