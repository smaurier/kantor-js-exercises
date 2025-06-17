// Sum number from the visitor

number1 = +prompt("Enter first number", 0);
number2 = +prompt("Enter second number", 0);

if (isFinite(number1) && isFinite(number2)) {
    alert("Sum: " + (number1 + number2));
}

// Why 6.35.toFixed(1) == 6.3 ?

// C'est à cause des imprécisions de représentation des nombres à virgule flottante en JavaScript.
// 6.35 n'est pas exactement représenté en binaire, donc le résultat du calcul est légèrement inférieur à 6.35.
// Ainsi, toFixed(1) arrondit vers le bas à 6.3.

// Pour 4.5, toFixed(0) donne bien 5, car 4.5 est exactement représenté en binaire.

alert((6.35).toFixed(20)); // Voir la vraie valeur
alert(Math.round(6.35 * 10) / 10); // 6.4

// TASK 3: Repeat until number
function readNumber() {
    let num;
    do {
        num = prompt("Enter a number", "");
    } while (!isFinite(num));
    return +num;
}

// TASK 4: Random number in range
function random(min, max) {
    return Math.random() * (max - min) + min;
}