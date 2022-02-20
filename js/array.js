document.write("This is my array.");

let array = new Array();
array = new Array(4);
array = new Array(4, 5, 6, 7, 8);
array = new Array(55, 77, 99, 44, 66);
// array = ["pffijifgja", "ijgop"];

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  // console.log(element)
}

// console.log(array);

var fibonacci = []; //{1}
fibonacci[1] = 1; //{2}
fibonacci[2] = 1; //{3}
for (var i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; ////{4}
}
for (var i = 1; i < fibonacci.length; i++) {
  //{5}
  //  console.log(fibonacci[i]); //{6}
}

let numbers = [];
numbers.push(10);
numbers.push(12, 13);
for (var i = numbers.length; i >= 0; i--) {
  numbers[i] = numbers[i - 1];
}
numbers[0] = -1;
// console.log(numbers);

let averageTemp = [];
//day 1
averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;
//day 2
averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 72;

function printMatrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    for (let j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}

// printMatrix()

var matrix3x3x3 = [];
for (var i = 0; i < 3; i++) {
  matrix3x3x3[i] = [];
  for (var j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
    for (var z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i + j + z;
    }
  }
}

var isEven = function (x) {
  // returns true if x is a multiple of 2.
  // console.log(x);
  return x % 2 == 0 ? true : false;
};
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// numbers.every(isEven);
numbers.some(isEven);

// console.log(numbers)

// console.log(matrix3x3x3);

numbers.forEach(function (x) {
  // console.log(x % 2 == 0);
});
var myMap = numbers.map(isEven);
// console.log(myMap)

var evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

let p = numbers.reduce(function (previous, current, index) {
  return previous + current;
});
// console.log(p);

for (let n of numbers) {
  // console.log(n % 2 == 0 ? "even" : "odd");
}

let aEntries = numbers.entries(); //retrieve iterator of key/value
console.log(aEntries.next());
// console.log(aEntries.next().value); //[0, 1] - position 0, value 1
// console.log(aEntries.next().value); //[1, 2] - position 1, value 2
// console.log(aEntries.next().value); //[2, 3] - position 2, value 3

let aValue = numbers.values();
// console.log(aValue.next());
// console.log(aValue.next());
// console.log(aValue.next());
// console.log(aValue.next());
// console.log(aValue.next());

let numbers2 = Array.from(numbers);
// console.log(numbers2)

let numbers3 = Array.of(1, 11);
let numbers4 = Array.of(1, 2, 3, 4, 5, 6);
// let numbers3 = [1];
// let numbers4 = [1, 2, 3, 4, 5, 6];

let numbersCopy = Array.of(...numbers4);
// console.log(numbers3)
// console.log(numbers4)
// console.log(numbersCopy);

// console.log(numbersCopy.fill(1, 2, 4));

let ones = Array(5).fill(2);
// console.log(ones)

let copyArray = [1, 2, 3, 4, 5, 6];
// console.log(copyArray.copyWithin(1, 4));/
// console.log(copyArray.copyWithin(1, 3, 5));

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
numbers.sort(compare);

var friends = [
  { name: "John", age: 30 },
  { name: "Ana", age: 20 },
  { name: "Chris", age: 25 },
];
function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }

  return 0;
}
// console.log(friends.sort(comparePerson));

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function multipleOf13(element, index, array) {
  return element % 13 == 0 ? true : false;
}
// console.log(numbers.find(multipleOf13));
// console.log(numbers.findIndex(multipleOf13));

var numbersString = numbers.join("_");
console.log(numbersString);
