# Interaction : alert, prompt, confirm

## `alert(message)`
- Affiche une boîte de dialogue modale avec un message et un bouton “OK”.
- Bloque l'exécution du script jusqu'à fermeture.

## `prompt(message, default)`
- Affiche une boîte de dialogue avec un champ texte.
- Renvoie la saisie de l’utilisateur sous forme de **string**.
- Si l’utilisateur annule → retourne `null`.

## `confirm(message)`
- Affiche une boîte avec “OK” / “Annuler”.
- Renvoie un **boolean** : `true` si OK, `false` si Annuler.
