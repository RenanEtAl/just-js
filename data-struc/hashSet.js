// Hash Set
// Insertion: O(1)
// Random access: -
// Find: O(1)
// Random removal: O(1)

const myHashSet = new Set();
myHashSet.add("Elixir");
myHashSet.add("Typescript");
console.log(myHashSet.has("Elixir")); // "true"
console.log(myHashSet.size); // "2"
myHashSet.delete("Elixir");
console.log(myHashSet.has("Elixir")); // "false"
