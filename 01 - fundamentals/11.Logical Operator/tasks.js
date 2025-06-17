alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); //1
alert(1 && null && 2); //null
alert(alert(1) && alert(2)); //2
alert(null || 2 && 3 || 4); //3


//Write an if condition to check that age is between 14 and 90 inclusively.
const age = prompt("How old are you ?")
if (age >= 14 && age <= 90) {
  alert("your age is between 14 and 90")
} else {
  alert("your are out of the range")
}

//Write an if condition to check that age is NOT between 14 and 90 inclusively.
if (!age >= 14 && age <= 90) {
  alert("your are out of the range")
} else {
  alert("your age is between 14 and 90")
}

if (age < 14 || age > 90) {
  alert("your are out of the range")
} else {
  alert("your age is between 14 and 90")
}

//////////
if (-1 || 0) alert('first'); //alert
if (-1 && 0) alert('second'); //not alert
if (null || -1 && 1) alert('third'); // alert

//////////Check the login

//Passé plus le temps


