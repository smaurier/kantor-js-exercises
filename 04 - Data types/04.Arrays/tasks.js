// is array copied ?
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

alert(fruits.length); //4. Non, on modifie le meme tableau. C'est une copie par ref

// Array operations.
let styles = ["Jazz", "Blues",];
styles.push("RocknRoll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
styles.shift();
styles.unshift("Rap", "Reggae");

// Calling in an array context
let arr = ["a", "b"];
arr.push(function () { alert(this); });
arr[2](); //a,b,function(){alert(this)} car this pointe vers arr. Donc alert(this) affiche le tableau lui-même.

// Sum input numbers

function sumInput() {
  const arrayPrompt = [];
  let number = +prompt("Enter a number");
  let sum = 0;

  while (Number.isFinite(number)) {
    arrayPrompt.push(number);
    number = +prompt("Enter a number");
  }

  if (arrayPrompt.length > 0) {
    arrayPrompt.forEach(
      (item) => {
        sum += item;
      }
    )
  }

  return sum;
}

// A maximal subarray
function getMaxSubSum(arr) {
  let sum = 0;
  let highScore = 0;

  arr.forEach(
    (item) => {
      sum += item;
      highScore = Math.max(highScore, sum); // Retourne la plus grande des valeurs

      if (sum < 0) {
        sum = 0;
      }
    }
  )

  return highScore;
}
