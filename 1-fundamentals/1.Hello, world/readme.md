# Hello World

## Intégration de JavaScript dans HTML

- On peut insérer du JavaScript directement dans une page HTML via la balise `<script>...</script>`.
- Le navigateur exécute le code dès qu’il atteint cette balise (synchrone, blocant). (bloquant : important pour le futur avec `defer`/`async`).
- Pour séparer le code et améliorer la maintenance, on peut utiliser un fichier `.js` externe : performance / maintenabilité
  
  ```html
  <script src="path/to/script.js"></script>
  ```

Ce fichier externe est mis en cache par le navigateur, ce qui améliore les performances.

⚠️ Le code externe n’a pas besoin de balise <script> interne : le fichier .js est du JS pur, pas du HTML.
