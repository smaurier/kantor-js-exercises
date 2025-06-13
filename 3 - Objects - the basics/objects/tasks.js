//Hello, object

const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//chack for emptiness

const isEmpty = (object) => {
  for (let key in object) {
    return false
  }
  return true
}

//Sum object properties
let salaries = { John: 100, Ann: 160, Pete: 130 }
let sum = 0;

for (let name of salaries) {
  sum += salaries[name]
}

alert(sum)

//Multiply numeric property values by 2
function multiplyNumeric(obj) {
  let sum = 0;
  for (let key of obj) {
    if (typeof key === "number") {
      obj[key] *= 2;
    }
  }
}