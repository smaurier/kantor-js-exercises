# Notes – Copying & Cloning Objects

- Toujours savoir si tu as besoin d'une copie à plat ou profonde !
- `Object.assign` et la boucle `for...in` ne copient pas les objets imbriqués (shallow).
- `structuredClone` (standard ES2022) est le moyen le plus simple et fiable pour copier profondément (deep).
- `JSON.parse(JSON.stringify(obj))` est un hack ancien, ne gère pas : fonctions, dates, références circulaires.
- Les arrays sont aussi des objets : les mêmes pièges s’appliquent !
- Attention à la mutation involontaire via référence dans les objets imbriqués.
