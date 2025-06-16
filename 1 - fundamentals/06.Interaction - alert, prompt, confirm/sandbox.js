const name = prompt("Enter your name");
if (name === null) {
  alert("Cancelled");
} else {
  alert(`Hello ${name}`);
}

// const age = prompt("Your age?", "18");

//console.log(age == 18);  // true → coercition
//console.log(age === 18); // false → types différents


const age = Number(prompt("Your age?", "18"));
console.log(typeof age); // "number"