document.write("This is my sorting algorithm.");

// Sorting Algorithms

// ******************** THE BUBBLE SORT *********************
function ArrayList() {
  var array = [];
  this.insert = function (item) {
    array.push(item);
  };

  this.toString = function () {
    return array.join();
  };

  this.bubbleSort = function () {
    var length = array.length;
    for (var i = 0; i < length; i++) {
      console.log(
        "i1111 ----->",
        i,
        "array----------------->",
        array[i]
      );
      for (var j = 0; j < length - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
        }
        console.log(
          "j ----->",
          j,
          "array----------------->",
          array[i]
        );
      }
    }
    console.log(
      "i22222 ----->",
      i,
      "array----------------->",
      array[i]
    );
  };

  var swap = function (array, index1, index2) {
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  };

  this.modifiedBubbleSort = function () {
    var length = array.length;
    for (var i = 0; i < length; i++) {
      // console.log(
      //   "i1111 ----->",
      //   i,
      //   "array----------------->",
      //   array[i]
      // );

      for (var j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swapM(j, j + 1);
        }
        // console.log(
        //   "j ----->",
        //   j,
        //   "array----------------->",
        //   array[i]
        // );
      }
      // console.log(
      //   "i22222 ----->",
      //   i,
      //   "array----------------->",
      //   array[i]
      // );
    }
    return array;
  };

  let swapM = (index1, index2) => {
    let temp = index1;
    index1 = index2;
    index2 = temp;
  };

  this.selectionSort = () => {
    let length = array.length;
    let indexMin;
    for (let i = 0; i < length - 1; i++) {
      indexMin = i;
      // console.log("array[i]----->", array[i]);
      for (let j = i; j < length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j;
        }
        // console.log("array[j]----->", array[j]);
      }
      if (i !== indexMin) {
        swapM(i, indexMin);
      }
    }
  };
}
function createNonSortedArray(size) {
  var array = new ArrayList();
  for (var i = size; i > 0; i--) {
    array.insert(i);
  }
  return array;
}

var array = createNonSortedArray(5);
console.log(array.toString());
// console.log(
//   "******************************bubbleSort*****************************************"
// );
// array.bubbleSort();
// console.log(array.toString());
// console.log(
//   "******************************modifiedBubbleSort*****************************************"
// );
// array.modifiedBubbleSort();

array.selectionSort();
console.log(array.toString());
