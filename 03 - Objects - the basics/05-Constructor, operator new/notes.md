# Notes – Function Constructors

- Le mot-clé `new` fait : création d’un objet vide, assignation à `this`, exécution, retour de `this`.
- `new.target` permet de détecter si la fonction a été appelée avec ou sans `new`.
- Si une fonction constructeur retourne explicitement un objet, c’est cet objet qui sera renvoyé (pas le `this` créé).
- Définir les méthodes dans le constructeur crée une copie pour chaque instance (consomme de la mémoire inutilement). Préférer le prototype pour les méthodes partagées.
- Utilisation “one-shot” du constructeur rare, mais possible pour objets complexes à la volée.
- Les classes ES6 ne sont qu’un sucre syntaxique sur ce modèle.
