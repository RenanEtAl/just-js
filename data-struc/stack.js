// Insertion (push): O(1)
// Random access (access any element): O(n)*
// Access first (peek — access most recently added element): O(1)
// Find (find a specific element): O(n)
// Random removal (remove any element): O(n)
// Remove first (pop — remove most recently added element): O(1)

const stack = [];
// insert elements (push)
stack.push("one");
stack.push("two");
console.log(stack); // ['one', 'two']
// access first (peek)
console.log(stack[stack.length - 1]); // "two"
// remove first (pop)
stack.pop();
console.log(stack); // ['one']

// Insertion (enqueue): O(1)
// Random access (access any element): O(n)
// Access last (access least recently added element): O(1)
// Find (find a specific element): O(n)
// Random removal (remove any element): O(n)
// Remove last (dequeue — remove least recently added element): O(1)

const queue = [];
// insert elements (enqueue)
queue.push("one");
queue.push("two");
console.log(queue); // ['one', 'two']
// access last
console.log(queue[0]); // "one"
// remove last (dequeue)
queue.shift();
console.log(queue); // ['two']

// using linked list

const Node = (data) => ({ data, next: null, prev: null });

const Queue = () => {
  const Node = (data) => ({ data, next: null, prev: null });
  let head = null;
  let tail = null;
  return {
    enqueue,
    dequeue,
    peek,
  };
};

// insertion

const enqueue = (data) => {
  if (head == null) {
    head = Node(data);
    tail = head;
    return head;
  }
  const newNode = Node(data);
  newNode.next = head;
  head.prev = newNode;
  head = newNode;
  return head;
};

// remove last

const dequeue = () => {
  if (tail === null) return null;
  const tailData = tail.data;
  if (tail.prev === null) {
    tail = null;
    head = null;
    return tailData;
  }
  tail.prev.next = null;
  tail = tail.prev;
  return tailData;
};

// peek

const peek = () => (tail ? tail.data : null);
