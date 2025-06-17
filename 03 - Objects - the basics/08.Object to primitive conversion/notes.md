# Notes détaillées – Object to Primitive Conversion

- `ToPrimitive` : opération interne de JS déclenchée si un objet est utilisé comme une primitive.
- Les trois hints : `"string"`, `"number"`, `"default"`
- `Symbol.toPrimitive(hint)` → méthode prioritaire si définie.
- Si absente :
    - `"string"` → `toString()` puis `valueOf()`
    - `"number"` / `"default"` → `valueOf()` puis `toString()`
- Attention : les méthodes doivent retourner un **type primitif**.
- Sinon JS l’ignore et passe à la suivante. Si aucune ne marche → TypeError.

Cas pratiques :
```js
let obj = {
  [Symbol.toPrimitive](hint) {
    return hint === "string" ? "Hello" : 42;
  }
};

String(obj); // "Hello"
+obj;        // 42
```

⚠️ Attention au `1234..toString()` → les deux points permettent d'appeler `.toString()` sans erreur de syntaxe.

Autre exemple :
```js
let crazy = {
  toString() { return {}; },
  valueOf() { return {}; }
};

alert(crazy); // ❌ TypeError: Cannot convert object to primitive
```