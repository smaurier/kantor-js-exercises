// Que va afficher ce code ? Justifie chaque ligne en commentaire.
let str = "ok";
str.test = 5;

console.log(str.test);      // undefined
console.log(typeof str);    // string
console.dir(str);           // ok, test n'existe plus