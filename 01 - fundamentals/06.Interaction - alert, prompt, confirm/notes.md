# notes.md

- `prompt` retourne toujours une **string** ou `null` (si annulé). Ne jamais présumer un nombre sans cast.
- `confirm` retourne un **boolean** : `true` si OK, `false` si Annuler.
- Ces trois fonctions (alert, prompt, confirm) bloquent l’interface tant que la boîte est ouverte.
- Elles ne sont pas utilisables en UX moderne → à éviter dans du code pro (remplacées par des composants modaux).
