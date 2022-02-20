document.write("this is my sorting2.js file.");

let selectionSort = (arr, n) => {
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, minIndex, i);
  }
};

let bubbleSort = (arr, n) => {
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};

let insertionSort = (arr, n) => {
  for (let i = 1; i < n; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0) {
      if (arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
      } else {
        break;
      }
    }
    arr[j + 1] = temp;
  }
};

let merge = (arr, startingIndexValue, endingIndexValue) => {
  let mid = Math.floor((startingIndexValue + endingIndexValue) / 2);

  let len1 = mid - startingIndexValue + 1;
  let len2 = endingIndexValue - mid;

  let first = new Array(len1);
  let second = new Array(len2);

  let mainArrayIndex = startingIndexValue;
  for (let i = 0; i < len1; i++) {
    first[i] = arr[mainArrayIndex++];
  }

  mainArrayIndex = mid + 1;
  for (let i = 0; i < len2; i++) {
    second[i] = arr[mainArrayIndex++];
  }

  // Merge 2 sorted array
  let index1 = 0;
  let index2 = 0;
  mainArrayIndex = startingIndexValue;

  while (index1 < len1 && index2 < len2) {
    if (first[index1] < second[index2]) {
      arr[mainArrayIndex++] = first[index1++];
    } else {
      arr[mainArrayIndex++] = second[index2++];
    }
  }

  while (index1 < len1) {
    arr[mainArrayIndex++] = first[index1++];
  }
  while (index2 < len2) {
    arr[mainArrayIndex++] = second[index2++];
  }
};

let mergeSort = (arr, startingIndexValue, endingIndexValue) => {
  // Base case
  if (startingIndexValue >= endingIndexValue) {
    return;
  }

  let mid = Math.floor((startingIndexValue + endingIndexValue) / 2);

  // Sorting left side
  mergeSort(arr, startingIndexValue, mid);

  // Sorting right side
  mergeSort(arr, mid + 1, endingIndexValue);

  // Merge sorted arr
  merge(arr, startingIndexValue, endingIndexValue);
};

let partition = (arr, startingIndexValue, endingIndexValue) => {
  let pivot = arr[startingIndexValue];
  let count = 0;

  for (let i = startingIndexValue + 1; i <= endingIndexValue; i++) {
    if (arr[i] <= pivot) {
      count++;
    }
  }

  let pivotIndex = startingIndexValue + count;
  swap(arr, pivotIndex, startingIndexValue);

  let i = startingIndexValue;
  let j = endingIndexValue;

  while (i < pivotIndex && j > pivotIndex) {
    while (arr[i] <= pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }

    if (i < pivotIndex && j > pivotIndex) {
      swap(arr, i, j);
    }
  }
  return pivotIndex;
};

let quickSort = (arr, startingIndexValue, endingIndexValue) => {
  if (startingIndexValue >= endingIndexValue) {
    return;
  }

  // partition
  let p = partition(arr, startingIndexValue, endingIndexValue);

  // sorting left part
  quickSort(arr, startingIndexValue, p - 1);

  // sorting right part
  quickSort(arr, p + 1, endingIndexValue);
};

let swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

function printArray(arr, size) {
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }
}

var arr = [
  2, 8, 1, 3, 6, 7, 5, 4, 14, 0, 6, 5, 8, 8, 6, 5, 4, 3, 2, 34, 4, 4,
  5, 6,
];
var n = arr.length;

// bubbleSort(arr, n);
// selectionSort(arr, n);
// insertionSort(arr, n);
// mergeSort(arr, 0, n - 1);
quickSort(arr, 0, n - 1);

printArray(arr, n);
