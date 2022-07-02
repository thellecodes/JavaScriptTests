let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Linear Search
function linearSearch(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    // loop through array
    if (arr[i] === elem) {
      return i; // returns the index
    }
  }
  return -1; // returns -1
}

// console.log(linearSearch(arr, -1));

// Binary Search
function binarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === key) {
      // found the key
      return middle;
    } else if (arr[middle] < key) {
      // search to the right
      start = middle + 1;
    } else {
      // search  to the left
      end = middle - 1;
    }
  }
  // key wasn't found
  return -1;
}

console.log(binarySearch(arr, 3));
