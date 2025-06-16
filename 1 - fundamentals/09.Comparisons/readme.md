# Comparisons (Comparaisons)

## Résultat booléen

- Une comparaison (`<`, `>`, `==`, etc.) retourne toujours un **booléen** (`true` ou `false`).

## Comparaison de chaînes (`string`)

- Les chaînes sont comparées caractère par caractère **en Unicode**.
  - `"Z"` < `"a"` → `true`
  - `"apple"` > `"pineapple"` → `false` car `"a"` < `"p"`

- ⚠️ Ce n'est **pas une comparaison lexicographique humaine** : la casse et l’ordre Unicode dominent.
  → Convertir en `.toLowerCase()` avant comparaison si besoin d'ordre alphabétique "réel".

## Comparaison entre types différents

- JS tente **d'abord de convertir les types en `number`**, sauf quand on utilise `===`.

```js
"2" > 1         // true  → "2" devient 2
"01" == 1       // true  → "01" devient 1
true == 1       // true  → true devient 1
false == 0      // true
```

## Null et undefined : cas particuliers

```js
null == undefined      // true (seulement entre eux)
null === undefined     // false
null >= 0              // true (!)
null > 0               // false
```

- ⚠️ Ces cas sont **très pièges**. Mémoriser les comportements spéciaux de `null` et `undefined`.

## Recommandation : bannir `==` et `!=`

- Toujours préférer `===` et `!==` pour éviter la **coercition implicite**.
