//

function heapify(arr, length, index) {
  let largest = index; // use to make comparisons
  let left = index * 2 + 1; // leftChild
  let right = left + 1; // rightChild

  // if parent is larger than lef child
  if (left < length && arr[left] > arr[largest]) {
    // assign largest to left child
    largest = left;
  }
  // compare largest to right child
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }
  // check if largest is still referring to the parent element
  if (largest != index) {
    // swap the largest element with the parent
    [arr[index], arr[largest]] = [arr[largest], arr[index]];
    heapify(arr, length, largest);
  }
  return arr;
}

// bottom up, so we need to find the last parent node in the heap
function heapSort(arr) {
  let length = arr.length;
  let lastParentNode = Math.floor(length / 2 - 1);
  let lastChild = length - 1;
  // start at the last parent
  // heapify way back up
  while (lastParentNode >= 0) {
    heapify(arr, length, lastParentNode);
    lastParentNode--;
  }

  while (lastChild >= 0) {
    [arr[0], arr[lastChild]] = [arr[lastChild], arr[0]];
    heapify(arr, lastChild, 0);
    lastChild--;
  }
  return arr;
}

let unsortedArr = [1, 6, 7, 4, 5, 3, 2, 8];
