// Comparisons

console.log(5 > 4); // true
console.log("apple" > "pineapple"); // false
console.log("2" > "12"); // true (car "2" > "1") : on compare les chaînes de caractères, caractère par caractère
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false ❌, car "\n0\n" est converti en nombre 0, et null est égal à undefined mais pas à 0
console.log(null === +"\n0\n"); // false, car +"\n0\n" est converti en 0, et null n'est pas strictement égal à 0
