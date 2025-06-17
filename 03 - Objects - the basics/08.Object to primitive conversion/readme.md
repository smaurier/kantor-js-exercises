# 🧠 Object to Primitive Conversions (JS)

Quand un objet est utilisé dans un contexte où une primitive est attendue, JavaScript essaie de le convertir. Ce processus est appelé **ToPrimitive**. Il peut être déclenché dans différents contextes : `+`, comparaison, `alert`, etc.

## 🔹 Hints de conversion
- `"string"` → ex: `alert(obj)`
- `"number"` → ex: `+obj`, `obj * 2`
- `"default"` → ex: `obj == 1`, `obj + ''`

## 🔹 Ordre d'appel (si pas de Symbol.toPrimitive)
| Hint       | Ordre de fallback          |
|------------|----------------------------|
| `"string"` | `toString()` → `valueOf()` |
| autre      | `valueOf()` → `toString()` |

## 🔹 Symbol.toPrimitive (si défini)
Méthode prioritaire si présente :  
```js
[Symbol.toPrimitive](hint) {
  return hint === "string" ? "..." : ...;
}
```

## 🔹 Valeurs de retour attendues
Les méthodes doivent retourner une **primitive** (string, number, boolean). Sinon → ignorée.

## 🔹 Exemple typique
```js
let user = {
  name: "Nico",
  money: 1000,
  toString() {
    return `{name: "${this.name}"}`;
  },
  valueOf() {
    return this.money;
  }
};

alert(user);       // "{name: "Nico"}"
console.log(+user); // 1000
```

## 🔹 Erreur possible
Si aucune méthode ne retourne une primitive : `TypeError`.