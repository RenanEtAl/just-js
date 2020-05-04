// determine pivot
// O(nlogn).

function swap(items, leftIndex, rightIndex) {
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    leftptr = left, //left pointer
    rightptr = right; //right pointer
  while (leftptr <= j) {
    while (items[leftptr] < pivot) {
      leftptr++;
    }
    while (items[rightptr] > pivot) {
      rightptr--;
    }
    if (i <= rightptr) {
      swap(items, leftptr, rightptr); //swap two elements
      leftptr++;
      rightptr--;
    }
  }
  return leftptr;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}
// first call to quick sort
var result = quickSort(items, 0, items.length - 1);
