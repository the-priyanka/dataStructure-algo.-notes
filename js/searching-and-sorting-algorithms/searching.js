document.write("This is my searching algorithm....");

// Searching algo here.

// ********************* LINEAR ALGORITHM **************************
const linearBinary = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return `Value Found ${arr[i]}`;
    }
  }
  return "Value not found.";
};

let arr = [1, 5, 78, 4, 9, 8, 3];
// console.log(linearBinary(arr, 51));

// ********************* BINARY SEARCH ----> sorted array **************************
const binarySearch = (arr, value) => {
  let min = 0;
  let max = arr.length - 1;
  let mid = Math.floor((min + max) / 2);

  while (arr[mid] !== value && min < max) {
    if (value < arr[mid]) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
    mid = Math.floor((min + max) / 2);
  }

  if (arr[mid] === value) {
    return arr[mid];
  } else {
    return "value not found.";
  }
};

let binaryArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(binaryArr, 5));
