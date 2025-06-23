let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet();

function markAsRead(message) {
  readMessages.add(message);
}

function isMessageRead(message) {
  return readMessages.has(message);
}

// Example usage
markAsRead(messages[0]);
console.log(isMessageRead(messages[0])); // true
console.log(isMessageRead(messages[1])); // false

let readMap = new WeakMap();
readMap.set(messages[0], new Date(2017, 1, 1));
