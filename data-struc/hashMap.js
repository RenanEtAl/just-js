// Hash Map
// Insertion: O(1)
// Random access: O(1)
// Find: O(1)
// Random removal: O(1)

const myHashMap = new Map();
myHashMap.set("six", 6);
myHashMap.set("nine", 9);
console.log(myHashMap.get("nine")); // "9"
console.log(myHashMap.has("six")); // "true"
console.log(myHashMap.size); // "2"
myHashMap.delete("six");
console.log(myHashMap.size); // "1"