- Javascript nous permet de travailler sur les primitives comme si elles étaient des objets
Mais les primitives bien sur, ne sont pas des objets

- primitive : string, number, bigint, boolean, symbol, null et undefined

- objet : peut garder de multiples valeurs en propriété. Peut etre créé avec {}. function est par exemple un objet.

- Une des choses cool en js est qu'on peut garder une fonction comme propriété dans le corps de l'objet

- Le paradoxe du createur de js :
    - Plein de choses que l'on veut faire avec une primitive, le truc sympa serait d'y acceder via des methodes.
    Mais ... les primitives doivent etre light !

    Solution (un peu bizarre) :
    1/ les primitives restent des primitives. Juste une seule valeur.
    2/ Le langage permet l'acces a des fonctions personnalisées pour chacun de ces types, via un special "conteneur objet" qui permet que la fonctionnalité soit créée. Ce conteneur est ensuite detruit - car c'est une fonction.

    Un object wrapper par type de primitive, ils sont différents pour chaque type.

    ex : string.toUpperCase()
    - Un conteneur objet special est créé pour acceder a toUpperCase()
    - La méthode run et retourne une nouvelle string
    - le conteneur est détruit pour la légèreté

    
- On peut faire new Number(0), mais très déconseillé ! On est alors en type objet.

- null et undefined n'ont pas de méthodes
