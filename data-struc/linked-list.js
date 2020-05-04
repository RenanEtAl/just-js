// Insertion (insert an element): O(1)
// Random access (access any element): O(n)*
// Find (find a specific element): O(n)
// Random removal (remove any element): O(n)

// singly linked list

const createNode = (data) => ({
  next: null,
  data,
});

// insertion

const insertAfter = (node, data) => {
  const newNode = createNode(data);
  newNode.next = node.next;
  node.next = newNode;
  node.next = newNode;
  return node;
};

const insertBefore = (head, data) => {
  const newHead = createNode(data);
  newHead.next = head;
  return newHead;
};

// create new list
let head = createNode("one");
// inser element after head
insertAfter(head, "two");
// insert to head of list
head = insertBefore(head, "zero");

// Random access

const getElementAt = (head, next) => {
  let currentIndex = 0;
  let currentNode = head;
  while (currentIndex < index && currentNode != null) {
    currentIndex++;
    currentNode = currentNode.next;
  }
  return currentNode;
};

// finding a specific element
const getElement = (head, data) => {
  let currentNode = head;
  while (currentNode.data !== data && currentNode !== null) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

// random removal
const remove = (head, data) => {
  if (head.data === data) return head.next;
  let currentNode = head;
  while (currentNode.next !== null) {
    if (currentNode.next.data === data) {
      currentNode.next = currentNode.next.next;
      return head;
    }
    currentNode = currentNode.next;
  }
  return head;
};
