// Task 1: simple switch

let color = prompt("Enter a color:");

switch (color) {
  case "red":
    alert("Stop!");
    break;
  case "green":
    alert("Go!");
    break;
  case "yellow":
    alert("Wait!");
    break;
  default:
    alert("Unknown color");
}

// Task 2: switch with fallthrough

let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
  case "C":
    console.log("Well done");
    break;
  case "D":
    console.log("You passed");
    break;
  default:
    console.log("Unknown grade");
}
