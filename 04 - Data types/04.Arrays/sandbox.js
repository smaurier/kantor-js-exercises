// 1. Ajoute un élément au début et à la fin
let fruits = ["Banana"];
fruits.unshift("Apple");
fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Orange"]

// 2. Retire le premier élément et le dernier
fruits.shift();
fruits.pop();
console.log(fruits); // ["Banana"]

// 3. Crée une copie des deux premiers éléments
let arr = [1, 2, 3, 4];
let sliced = arr.slice(0, 2);
console.log(sliced); // [1, 2]

// 4. Supprime 1 élément à partir de l’index 1, et insère "Hello"
arr.splice(1, 1, "Hello");
console.log(arr); // [1, "Hello", 3, 4]

// 5. Trouve si "Hello" est dans le tableau
console.log(arr.includes("Hello")); // true

// 6. Trie par ordre décroissant
let nums = [1, 4, 2, 10];
nums.sort((a, b) => b - a);
console.log(nums); // [10, 4, 2, 1]

let testArray = [];
testArray.length = 4;
testArray[2] = "Arbre"
console.log(testArray);

//Splice
let splicedArray = ["a", "b", "c", "d",];
splicedArray.splice(0, 1, 1, 2, 3, 4, 5)
console.log(splicedArray)
console.log(String(splicedArray))

//Slice
let slicedArray = ["a", "b", "c", "d",];
console.log(slicedArray.slice(0, 2));
console.log(slicedArray);
console.log(slicedArray.slice(-2, -1))

//foreach
let foreachArray = ["a", "b", "c", "d",];
foreachArray.forEach((item, index) => {
  console.log("foreched : " + item, "index : " + index)
});

//map
let mappedArray = ["a", 2, 3, "d",];
console.log(mappedArray.map(
  (item, index) => {
    return item * 2
  }
));

