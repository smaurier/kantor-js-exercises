# Notes – Optional Chaining

- Pratique pour éviter les erreurs d’accès aux propriétés profondes quand une valeur intermédiaire peut être null ou undefined.
- Inutilisable pour l’affectation ou la déclaration de nouvelles propriétés.
- Peut faciliter le code défensif, mais peut aussi cacher des bugs de structure inattendus si sur-utilisé.
- Utiliser avec parcimonie : ne jamais en faire un “parapluie” pour tout le code.
- Combine très bien avec l’opérateur de coalescence nulle (`??`) pour fournir des valeurs par défaut.
