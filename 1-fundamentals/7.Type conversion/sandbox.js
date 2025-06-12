console.log(String(null));       // "null"
console.log(Number(null));       // 0
console.log(Number(undefined));  // NaN
console.log(Number("123abc"));   // NaN
console.log(Number("   123  ")); // 123
console.log(Boolean("0"));       // true
console.log(Boolean(0));         // false
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true

console.log("" == 0);       // true
console.log("0" == 0);      // true
console.log(false == "0");  // true
console.log([] == false);   // true → 💥 piège total
console.log([] == 0);       // true → coercion implicite
console.log([0] == 0);      // true
// -> == est dangereux, il faut éviter son utilisation