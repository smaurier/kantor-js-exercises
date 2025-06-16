# Optional Chaining (`?.`)

## 1. Principe

- L’opérateur `?.` permet d’**accéder** à une propriété/méthode **sans erreur** si ce qui précède est `undefined` ou `null`.
- Il retourne immédiatement `undefined` si la chaîne “se casse”.

## 2. Syntaxe

- **Accès propriété :**  
  ```js
  let user = {};
  alert(user?.address?.street); // undefined (pas d’erreur)
  ```
- **Appel de méthode :**  
  ```js
  user?.sayHi?.();
  ```
- **Accès via index (array/objet) :**  
  ```js
  let users = null;
  users?.[0]?.name;
  ```
- **Avec delete :**  
  ```js
  delete user?.name;
  ```

## 3. Attention – pas pour l’affectation

- **NON** :  
  ```js
  user?.name = "Jean"; // ❌ Erreur, car `user` pourrait être null/undefined → pas d’affectation possible
  ```
- Tu peux lire, mais pas écrire de cette façon.

## 4. Cas d’usage typiques

- Accéder à des objets profonds, dont un parent peut être nul :  
  ```js
  let company = { manager: null };
  let name = company.manager?.address?.street; // undefined, pas d’erreur
  ```
- Vérifier la présence d’une méthode avant de l’appeler (callback, API instable…)
- Manipuler des tableaux d’objets optionnels

## 5. Piège

- **Uniquement sur chaînes, pas sur variables obligatoires.**
- Peut masquer des bugs (si tu relies tout avec ?., tu ne sais plus jamais ce qui manque…).

---

**À retenir :**  
- `?.` évite les erreurs “Cannot read property 'x' of undefined/null”.
- Sert surtout pour la lecture défensive sur des structures d’objets profonds, APIs imprévisibles, ou callbacks facultatifs.
- À **ne pas** utiliser pour affecter des valeurs (jamais `obj?.prop = ...`).
