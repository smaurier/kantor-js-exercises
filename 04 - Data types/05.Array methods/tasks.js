function camelize(str) {

  let splitted = str.split('-');
  console.log(splitted)

  let result = splitted.map(
    (item, index) => {
      if (index !== 0) {
        return item[0].toUpperCase() + item.slice(1);
      } else {
        return item
      }
    }
  )

  return result.join("")
}

console.log(camelize("background-color"))

function filterRange(arr, a, b) {
  return arr.filter(
    (item) => {
      item >= a && item <= b
    }
  )
}

function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
}

let arrToTest = [1, 2, 3, 4, 5, 6];
filterRangeInPlace(arrToTest, 2, 5);
console.log(arrToTest); // [2, 3, 4, 5]

let arrayToSort = [5, 2, 1, -10, 8];

// Sort in decresing order
arrayToSort.sort(
  (a, b) => b - a
)

alert(arrayToSort); // 8, 5, 2, 1, -10

function copySorted(array) {
  let copyArray = [...array]

  return copyArray.sort(
    (a, b) => b - a
  )
}

function Calculator() {
  this.calculate = (str) => {
    return +str
  }
}

//Map to name
let name = users.map((name) => name.name)

//Map to objects
const usersMapped = users.map((item) => ({
  id: item.id,
  fullname: `${item.name} ${item.surname}`
}));

//Sort user by age 
function sortByAge(arr) {
  arr.sort(
    (a, b) => a.age - b.age
  )
}

//Shuffle an array

function shuffle(arr) {
  arr.sort(
    () => Math.random()
  )
}

//Get average age
