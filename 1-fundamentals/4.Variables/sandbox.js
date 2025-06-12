"use strict";

// ❌ Mauvais nom : commence par chiffre
// let 1a = 5; // SyntaxError

// ❌ Nom réservé
// let let = 5; // SyntaxError

// ❌ var et let mélangés
var x = 1;
let x = 2; // SyntaxError: Identifier 'x' has already been declared


// let vs const
let a = 10;
a = 20; // ✅ OK

const b = 10;
// b = 20; // ❌ TypeError: Assignment to constant variable

// MAIS :
const obj = { value: 42 };
obj.value = 99; // ✅ OK : la référence est constante, pas le contenu
