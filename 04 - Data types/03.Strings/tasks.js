// Uppercase the first chara
function ucFirst(str) {
  if (str && str.length > 0) {
    return str[0].toUpperCase() + str.slice(1);
  }
  return
}

// Check for spam
function checkSpam(str) {
  if (typeof str === "string") {
    const strLowered = str.toLowerCase();
    if (strLowered.includes("viagra") || strLowered.includes("xxx")) {
      return true
    }
  }
  return false
}

//Truncate the text
function truncate(str, maxLength) {
  if (typeof str === "string") {
    const strLength = str.length;
    if (strLength > maxLength) {
      return str.slice(0, maxLength) + "..."
    } else {
      return str
    }
  }
  return
}

// Extract the money
function extractCurrencyValue(str) {
  let newStr = "";
  for (letter of str) {
    if (isNaN(+letter) && letter !== '.') {
      continue
    } else {
      newStr += letter;
    }
  }

  return +newStr;
}
